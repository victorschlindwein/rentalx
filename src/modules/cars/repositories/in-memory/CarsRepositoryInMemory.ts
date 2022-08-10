import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "@modules/cars/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name, 
    description, 
    daily_rate, 
    license_plate, 
    fine_amount, 
    brand, 
    category_id
  }: ICreateCarDTO): Promise<void> {
    const cars = new Car();

    Object.assign(cars, {
      name, 
      description, 
      daily_rate, 
      license_plate, 
      fine_amount, 
      brand, 
      category_id
    });

    this.cars.push(cars)
  }
}

export { CarsRepositoryInMemory };