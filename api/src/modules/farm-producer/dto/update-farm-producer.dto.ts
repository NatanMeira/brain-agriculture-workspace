import { PartialType } from '@nestjs/mapped-types';
import { CreateFarmProducerDto } from './create-farm-producer.dto';

export class UpdateFarmProducerDto extends PartialType(CreateFarmProducerDto) {}
