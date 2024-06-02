import { Module } from '@nestjs/common';
import { RentalsController } from './rentals.controller';
import { RentalService } from './shared/rental.service';

@Module({
    controllers: [RentalsController], 
    providers: [RentalService]
})
export class RentalsModule {}
