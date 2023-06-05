import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
} from "../schemas/contact.schemas";
import { DeepPartial } from "typeorm";

type IContact = z.infer<typeof contactSchema>;
type IContactRequest = z.infer<typeof contactSchemaRequest>;
type IContactResponse = z.infer<typeof contactSchema>;
type IContactsResponse = z.infer<typeof contactSchemaResponse>;
type IContactUpdateRequest = DeepPartial<IContactRequest>;

export {
  IContact,
  IContactRequest,
  IContactResponse,
  IContactsResponse,
  IContactUpdateRequest,
};
