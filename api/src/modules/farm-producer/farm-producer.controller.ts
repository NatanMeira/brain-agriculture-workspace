import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { FarmProducerService } from './farm-producer.service';
import { CreateFarmProducerDto } from './dto/create-farm-producer.dto';
import { UpdateFarmProducerDto } from './dto/update-farm-producer.dto';
import { FindAllFarmProducerDto } from './dto';

@Controller('farm-producer')
export class FarmProducerController {
  constructor(private readonly farmProducerService: FarmProducerService) {}

  @Post()
  create(@Body() createFarmProducerDto: CreateFarmProducerDto) {
    return this.farmProducerService.create(createFarmProducerDto);
  }

  @Get()
  findAll(@Query() query: FindAllFarmProducerDto) {
    return this.farmProducerService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.farmProducerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFarmProducerDto: UpdateFarmProducerDto,
  ) {
    return this.farmProducerService.update(id, updateFarmProducerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.farmProducerService.remove(id);
  }
}
