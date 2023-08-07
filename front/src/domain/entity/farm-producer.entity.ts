import { PlantedCropsEnum } from "../enum";

export class FarmProducer {
  constructor(
    public id?: string,
    public cpfOrCnpj: string = '',
    public name: string = '',
    public farmName: string = '',
    public city: string = '',
    public state: string = '',
    public arableAreaInHectares: number = 0,
    public vegetationAreaInHectares: number = 0,
    public totalAreaInHectares: number = 0,
    public plantedCrops: PlantedCropsEnum[] = [],
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}

