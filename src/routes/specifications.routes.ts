import { Router } from 'express';

import { CreateSpecificationService } from "../modules/services/CreateSpecificationService";
import { SpecificationsRepository } from "../modules/repositories/SpecificationsRepository"


const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(specificationsRepository);

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
})

export { specificationsRoutes }