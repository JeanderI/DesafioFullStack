import { z } from "zod";
const contactSchema = z.object({
  id: z.number().int(),
  fullName: z.string().min(2).max(45),
  email: z.string().email(),
  telephone: z.number().min(8),
  registrationDate: z.string(),
  client: z.number(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  registrationDate: true,
  client: true,
});

const contactSchemaResponse = z.array(contactSchema);

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
    registrationDate: true,
    client: true,
  })
  .partial();

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaUpdate,
};
