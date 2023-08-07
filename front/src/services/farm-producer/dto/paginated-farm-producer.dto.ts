import { FarmProducer } from "@/domain/entity";

export class PaginatedFarmProducerDto {
  constructor(
    public data: FarmProducer[],
    public totalCount?: number,
  ) {}
}
