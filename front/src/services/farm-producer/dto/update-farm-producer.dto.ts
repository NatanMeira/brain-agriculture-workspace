import { PlantedCropsEnum } from "@/domain/enum";

export class UpdateFarmProducerDto {
  constructor(
    public id: string = '',
    public cpfOrCnpj: string = '',
    public name: string = '',
    public farmName: string = '',
    public city: string = '',
    public state: string = '',
    public arableAreaInHectares: number = 0,
    public vegetationAreaInHectares: number = 0,
    public totalAreaInHectares: number = 0,
    public plantedCrops: PlantedCropsEnum[] = []
  ) {}
}