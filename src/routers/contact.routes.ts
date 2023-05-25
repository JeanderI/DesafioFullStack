import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contact.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
const contactRoutes: Router = Router();

contactRoutes.post("", ensureTokenIsValidMiddleware, createContactController);
contactRoutes.get("", listContactController);
contactRoutes.patch("", ensureTokenIsValidMiddleware, updateContactController);
contactRoutes.delete("", ensureTokenIsValidMiddleware, deleteContactController);

export default contactRoutes;
