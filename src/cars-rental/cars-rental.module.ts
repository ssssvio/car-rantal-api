import { Module } from '@nestjs/common';
import { CarsRentalController } from './cars-rental.controller';
import { CarsRentalService } from './shared/cars-rental.service';

@Module({
  controllers: [CarsRentalController],
  providers: [CarsRentalService],
})
export class CarsRentalModule {}
