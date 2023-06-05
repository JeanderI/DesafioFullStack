import { z } from "zod";
import {
  clientSchema,
  clientSchemaRequest,
  clientSchemaResponse,
} from "../schemas/clients.schema";

type IClient = z.infer<typeof clientSchema>;
type IClientRequest = z.infer<typeof clientSchemaRequest>;
type IClientResponse = z.infer<typeof clientSchemaResponse>;

export { IClient, IClientRequest, IClientResponse };
