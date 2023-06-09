import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientController,
  updateClientController,
} from "../controllers/client.controllers";
import { validateDataMiddleware } from "../middlewares/validateData.middleware";
import {
  clientSchemaRequest,
  clientSchemaUpdate,
} from "../schemas/clients.schema";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";

const clientRoutes: Router = Router();

clientRoutes.post(
  "",
  validateDataMiddleware(clientSchemaRequest),
  createClientController
);
clientRoutes.get("", ensureTokenIsValidMiddleware, listClientController);
clientRoutes.patch(
  "",
  ensureTokenIsValidMiddleware,
  validateDataMiddleware(clientSchemaUpdate),
  updateClientController
);
clientRoutes.delete("", ensureTokenIsValidMiddleware, deleteClientController);

export default clientRoutes;
