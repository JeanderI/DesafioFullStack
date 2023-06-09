import { z } from "zod";
import {
  clientSchema,
  clientSchemaRequest,
  clientSchemaResponse,
} from "../schemas/clients.schema";
import { contactSchema } from "../schemas/contact.schemas";

type IClient = z.infer<typeof clientSchema>;
type IClientRequest = z.infer<typeof clientSchemaRequest> & {
  contacts?: z.infer<typeof contactSchema>[];
};
type IClientResponse = z.infer<typeof clientSchemaResponse>;

export { IClient, IClientRequest, IClientResponse };
