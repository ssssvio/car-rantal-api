import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CarsRentalService } from './shared/cars-rental.service';
import { Cars } from './shared/cars/cars';

@Controller('cars-rental')
export class CarsRentalController {
    constructor(
        private carsRentalService: CarsRentalService
    ) { }

    @Get()
    async getAllCars(): Promise<Cars[]> {
        return this.carsRentalService.getAllCars();
    }

    @Get(':id')
    async getCarById(@Param('id') id: number): Promise<Cars> {
        return this.carsRentalService.getCarById(id);
    }
    
    @Post()
    async createCar(@Body() car: Cars): Promise<Cars> {
        return this.carsRentalService.createCar(car);
    }

    @Put(':id')
    async updateCar(@Param('id') id: number, @Body() car: Cars): Promise<Cars> {
        return this.carsRentalService.updateCar(id, car);
    }
}
