import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('healthz')
  healthCheck(): Date {
    return new Date();
  }
}
