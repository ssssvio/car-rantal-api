import { Injectable } from '@nestjs/common';
import { Cars } from './cars/cars';

@Injectable()
export class CarsRentalService {
  cars: Cars[] = [
    {
      id: 1,
      name: 'Toyota Corolla',
      year: 2019,
      price: 100,
      mileage: 10,
      rented: false,
    },
    {
      id: 2,
      name: 'Toyota Camry',
      year: 2020,
      price: 150,
      mileage: 5,
      rented: false,
    },
    {
      id: 3,
      name: 'Toyota RAV4',
      year: 2021,
      price: 200,
      mileage: 2,
      rented: false,
    },
  ];

  getAllCars(): Cars[] {
    return this.cars;
  }

  getCarById(id: number): Cars {
    const car = this.cars.find((value) => value.id === +id);
    return car;
  }

  createCar(car: Cars): Cars {
    let lastId = 0;
    if (this.cars.length > 0) {
      lastId = this.cars[this.cars.length - 1].id;
    }
    car.id = lastId + 1;
    this.cars.push(car);

    return car;
  }

  updateCar(id: number, car: Cars): Cars {
    const index = this.cars.findIndex((car) => car.id === +id);
    this.cars[index] = car;
    car.id = +id;
    return car;
  }

  deleteCar(id: number): Cars[] {
    this.cars = this.cars.filter((car) => car.id !== +id);
    return this.cars;
  }
}
