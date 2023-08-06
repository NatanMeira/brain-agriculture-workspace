import { Module } from '@nestjs/common';
import { FarmProducerService } from './farm-producer.service';
import { FarmProducerController } from './farm-producer.controller';

@Module({
  controllers: [FarmProducerController],
  providers: [FarmProducerService]
})
export class FarmProducerModule {}
