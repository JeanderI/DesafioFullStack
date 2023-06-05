import { z } from "zod";

const clientSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  email: z.string(),
  password: z.string(),
  telephone: z.number(),
  registrationDate: z.string(),
});

const clientSchemaRequest = clientSchema.omit({
  id: true,
  registrationDate: true,
});

const clientSchemaResponse = clientSchema.omit({
  password: true,
});

export { clientSchema, clientSchemaRequest, clientSchemaResponse };
