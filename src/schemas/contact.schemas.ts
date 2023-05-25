import { z } from "zod";
const createContactSchema = z.object({
  id: z.number().int(),
  fullName: z.string().min(2).max(45),
  email: z.string().email(),
  telephone: z.number().min(8),
  registrationDate: z.string(),
  client: z.number(),
});

export { createContactSchema };
