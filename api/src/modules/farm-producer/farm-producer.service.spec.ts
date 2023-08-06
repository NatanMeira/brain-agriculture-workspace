import { Test, TestingModule } from '@nestjs/testing';
import { FarmProducerService } from './farm-producer.service';

describe('FarmProducerService', () => {
  let service: FarmProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmProducerService],
    }).compile();

    service = module.get<FarmProducerService>(FarmProducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
