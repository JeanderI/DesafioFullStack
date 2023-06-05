"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSchemaUpdate = exports.contactSchemaResponse = exports.contactSchemaRequest = exports.contactSchema = void 0;
const zod_1 = require("zod");
const contactSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    fullName: zod_1.z.string().min(2).max(45),
    email: zod_1.z.string().email(),
    telephone: zod_1.z.number().min(8),
    registrationDate: zod_1.z.string(),
    client: zod_1.z.number(),
});
exports.contactSchema = contactSchema;
const contactSchemaRequest = contactSchema.omit({
    id: true,
    registrationDate: true,
    client: true,
});
exports.contactSchemaRequest = contactSchemaRequest;
const contactSchemaResponse = zod_1.z.array(contactSchema);
exports.contactSchemaResponse = contactSchemaResponse;
const contactSchemaUpdate = contactSchema
    .omit({
    id: true,
    registrationDate: true,
    client: true,
})
    .partial();
exports.contactSchemaUpdate = contactSchemaUpdate;
