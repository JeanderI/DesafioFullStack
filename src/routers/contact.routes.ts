import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contact.controllers";
const contactRoutes: Router = Router();

contactRoutes.post("", createContactController);
contactRoutes.get("", listContactController);
contactRoutes.patch("", updateContactController);
contactRoutes.delete("", deleteContactController);

export default contactRoutes;
