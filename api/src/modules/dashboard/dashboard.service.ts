import { PrismaService } from '@/database/prisma/prisma.service';
import { Injectable, Logger } from '@nestjs/common';
import { FarmsByPlantedCropsQueryDto, GetDashboardDataDto } from './dto';

@Injectable()
export class DashboardService {
  logger = new Logger(DashboardService.name);

  constructor(private prisma: PrismaService) {}

  async getDashboardData(): Promise<GetDashboardDataDto> {
    const totalFarms = await this.prisma.farmProducer.count();
    const totalFarmsArea = await this.prisma.farmProducer.aggregate({
      _sum: {
        totalAreaInHectares: true,
        arableAreaInHectares: true,
        vegetationAreaInHectares: true,
      },
    });

    const farmsByState = await this.prisma.farmProducer.groupBy({
      by: ['state'],
      _count: {
        state: true,
      },
    });
    const farmsByPlantedCrops = await this.prisma.$queryRaw<
      FarmsByPlantedCropsQueryDto[]
    >`
      SELECT
        UNNEST("plantedCrops") AS crop,
        COUNT(DISTINCT "id") AS count
      FROM
        "farm_producer"
      GROUP BY
        crop;
    `;

    return {
      totalFarms,
      totalFarmsAreaInHectares: totalFarmsArea._sum.totalAreaInHectares || 0,
      totalArableAreaInHectares: totalFarmsArea._sum.arableAreaInHectares || 0,
      totalVegetationAreaInHectares:
        totalFarmsArea._sum.vegetationAreaInHectares || 0,
      farmsByState:
        farmsByState.map((farm) => ({
          name: farm.state,
          value: farm._count.state,
        })) || [],
      farmsByPlantedCrops:
        farmsByPlantedCrops.map((farm) => ({
          name: farm.crop,
          value: Number(farm.count),
        })) || [],
    };
  }
}
