export class GetDashboardDataDto {
  totalFarms: number;
  totalFarmsAreaInHectares: number;
  totalArableAreaInHectares: number;
  totalVegetationAreaInHectares: number;
  farmsByState: { name: string; value: number }[];
  farmsByPlantedCrops: { name: string; value: number }[];
}
