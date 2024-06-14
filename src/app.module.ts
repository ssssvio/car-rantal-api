import { Module } from '@nestjs/common';
import { CarsRentalModule } from './cars-rental/cars-rental.module';

@Module({
  imports: [CarsRentalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
