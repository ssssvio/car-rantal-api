import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppServiceHello } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppServiceHello],
})
export class AppModule {}
