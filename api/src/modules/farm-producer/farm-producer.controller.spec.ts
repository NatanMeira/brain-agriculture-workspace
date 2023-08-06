import { Test, TestingModule } from '@nestjs/testing';
import { FarmProducerController } from './farm-producer.controller';
import { FarmProducerService } from './farm-producer.service';

describe('FarmProducerController', () => {
  let controller: FarmProducerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmProducerController],
      providers: [FarmProducerService],
    }).compile();

    controller = module.get<FarmProducerController>(FarmProducerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
