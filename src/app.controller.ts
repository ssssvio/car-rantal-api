import { Controller, Get } from '@nestjs/common';
import {  AppServiceHello } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppServiceHello) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
