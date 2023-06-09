import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string(),
  telephone: z.number(),
  registrationDate: z.string(),
});

const clientSchema = z.object({
  id: z.number().optional(),
  fullName: z.string(),
  email: z.string(),
  password: z.string(),
  telephone: z.number(),
  registrationDate: z.string(),
  contacts: z.array(contactSchema).optional().nullable(),
});

const clientSchemaRequest = clientSchema.omit({
  id: true,
  registrationDate: true,
});

const clientSchemaResponse = clientSchema.omit({
  password: true,
});

const clientListSchemaResponse = z.array(clientSchemaResponse);

const clientSchemaUpdate = clientSchemaRequest.partial();

export {
  clientSchema,
  clientSchemaRequest,
  clientSchemaResponse,
  clientSchemaUpdate,
  clientListSchemaResponse,
};
