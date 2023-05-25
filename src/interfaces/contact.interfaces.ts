import { z } from "zod";
import { createContactSchema } from "../schemas/contact.schemas";

type IContact = z.infer<typeof createContactSchema>;

export { IContact };
