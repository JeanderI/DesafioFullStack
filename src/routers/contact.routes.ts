import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contact.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { validateDataMiddleware } from "../middlewares/validateData.middleware";
import { contactSchemaRequest } from "../schemas/contact.schemas";
import verifyContactExists from "../middlewares/verifyCategoryExists.middleware";
const contactRoutes: Router = Router();

contactRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  validateDataMiddleware(contactSchemaRequest),
  createContactController
);
contactRoutes.get("/:id", listContactController);
contactRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  verifyContactExists,
  validateDataMiddleware(contactSchemaRequest),
  updateContactController
);
contactRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  verifyContactExists,
  deleteContactController
);

export default contactRoutes;
