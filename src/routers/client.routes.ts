import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientsController,
  updateClientController,
} from "../controllers/client.controllers";
import { validateDataMiddleware } from "../middlewares/validateData.middleware";
import {
  clientSchemaRequest,
  clientSchemaResponse,
} from "../schemas/clients.schema";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";

const clientRoutes: Router = Router();

clientRoutes.post(
  "",
  validateDataMiddleware(clientSchemaRequest),
  createClientController
);
clientRoutes.get("", ensureTokenIsValidMiddleware, listClientsController);
clientRoutes.patch(
  "",
  ensureTokenIsValidMiddleware,
  validateDataMiddleware(clientSchemaRequest),
  updateClientController
);
clientRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  deleteClientController
);

export default clientRoutes;
