import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateFarmProducerDto } from './dto/create-farm-producer.dto';
import { UpdateFarmProducerDto } from './dto/update-farm-producer.dto';
import { PrismaService } from '@/database/prisma/prisma.service';
import { FindAllFarmProducerDto } from './dto';
import { Prisma } from '@prisma/client';
import { validateFarmAreaInput } from './helper';

@Injectable()
export class FarmProducerService {
  logger = new Logger(FarmProducerService.name);
  constructor(private prisma: PrismaService) {}

  async create(createFarmProducerDto: CreateFarmProducerDto) {
    validateFarmAreaInput(createFarmProducerDto);
    try {
      return await this.prisma.farmProducer.create({
        data: createFarmProducerDto,
      });
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(
        'Ocorreu um erro ao criar um produtor rural',
      );
    }
  }

  async findAll(query: FindAllFarmProducerDto) {
    try {
      const where: Prisma.FarmProducerWhereInput = {
        name: {
          contains: query.name,
          mode: 'insensitive',
        },
      };
      const data = await this.prisma.farmProducer.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
        take: query.limit,
        skip: query.offset,
      });
      const totalCount = await this.prisma.farmProducer.count({
        where,
      });
      return {
        data,
        totalCount,
      };
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException('Ocorreu um erro ao buscar os produtores');
    }
  }

  async findOne(id: string) {
    try {
      const farmProducer = await this.prisma.farmProducer.findFirstOrThrow({
        where: {
          id,
        },
      });
      return farmProducer;
    } catch (error) {
      this.logger.error(error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Produtor rural não encontrado');
        }
      }
      throw new BadRequestException('Ocorreu um erro ao buscar o produtor');
    }
  }

  async update(id: string, updateFarmProducerDto: UpdateFarmProducerDto) {
    const farmProducer = await this.findOne(id);
    validateFarmAreaInput({ ...farmProducer, ...updateFarmProducerDto });
    try {
      return await this.prisma.farmProducer.update({
        where: {
          id,
        },
        data: updateFarmProducerDto,
      });
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(
        'Ocorreu um erro ao atualizar o produtor rural',
      );
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    try {
      return await this.prisma.farmProducer.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(
        'Ocorreu um erro ao remover o produtor rural',
      );
    }
  }
}
