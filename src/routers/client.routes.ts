import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientsController,
  updateClientController,
} from "../controllers/client.controllers";
const clientRoutes: Router = Router();

clientRoutes.post("", createClientController);
clientRoutes.get("", listClientsController);
clientRoutes.patch("", updateClientController);
clientRoutes.delete("", deleteClientController);

export default clientRoutes;
