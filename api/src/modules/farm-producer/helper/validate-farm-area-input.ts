import { UpdateFarmProducerDto, CreateFarmProducerDto } from '../dto';
import { BadRequestException } from '@nestjs/common';

export function validateFarmAreaInput(
  input: CreateFarmProducerDto | UpdateFarmProducerDto,
) {
  const {
    arableAreaInHectares,
    totalAreaInHectares,
    vegetationAreaInHectares,
  } = input;

  if (arableAreaInHectares + vegetationAreaInHectares > totalAreaInHectares) {
    throw new BadRequestException(
      'A soma da área de vegetação e área agricultável não pode ser maior que a área total',
    );
  }
}
