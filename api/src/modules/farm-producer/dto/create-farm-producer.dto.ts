import {
  IsBrazilianState,
  IsCPFOrCNPJ,
  IsEnum,
  IsNumber,
  IsString,
  MaxLength,
} from '@/utils/validation';
import { PlantedCropsEnum } from '@prisma/client';

export class CreateFarmProducerDto {
  @IsCPFOrCNPJ()
  @IsString()
  cpfOrCnpj: string;

  @MaxLength(255)
  @IsString()
  name: string;

  @MaxLength(255)
  @IsString()
  farmName: string;

  @MaxLength(255)
  @IsString()
  city: string;

  @MaxLength(10)
  @IsString()
  @IsBrazilianState()
  state: string;

  @IsNumber()
  arableAreaInHectares: number;

  @IsNumber()
  vegetationAreaInHectares: number;

  @IsNumber()
  totalAreaInHectares: number;

  @IsEnum(PlantedCropsEnum, { each: true })
  plantedCrops: PlantedCropsEnum[];
}
