import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Mark A Class As Controler That Can Respond To Rquests
@Controller()
export class AppController {
  // Instantiate AppService
  constructor(private readonly appService: AppService) {}

  // Get Method Decorator
  // Routes Get HTTP Requests To The Specified Path, In This Case /
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
