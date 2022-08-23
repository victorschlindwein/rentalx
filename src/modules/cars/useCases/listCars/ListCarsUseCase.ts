import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository"
import { Car } from "@modules/cars/typeorm/entities/Car";

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

class ListCarsUseCase {
  constructor(
    private carsRepository: ICarsRepository
  ) {}
  
  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailable(brand, category_id, name);
    return cars;
  }
}

export { ListCarsUseCase }