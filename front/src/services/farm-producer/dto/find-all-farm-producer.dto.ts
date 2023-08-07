export class FindAllFarmProducerDto {
  constructor(
    public name?: string,
    public limit?: number,
    public offset?: number
  ) {}
}
