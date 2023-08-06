import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FarmProducerModule } from './modules/farm-producer/farm-producer.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { PrismaModule } from './database/prisma/prisma.module';

@Module({
  imports: [FarmProducerModule, DashboardModule, PrismaModule],
  controllers: [AppController],
})
export class AppModule {}
