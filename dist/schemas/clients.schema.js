"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientListSchemaResponse = exports.clientSchemaUpdate = exports.clientSchemaResponse = exports.clientSchemaRequest = exports.clientSchema = void 0;
const zod_1 = require("zod");
const contactSchema = zod_1.z.object({
    id: zod_1.z.number(),
    fullName: zod_1.z.string(),
    email: zod_1.z.string(),
    telephone: zod_1.z.number(),
    registrationDate: zod_1.z.string(),
});
const clientSchema = zod_1.z.object({
    id: zod_1.z.number().optional(),
    fullName: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    telephone: zod_1.z.number(),
    registrationDate: zod_1.z.string(),
    contacts: zod_1.z.array(contactSchema).optional().nullable(),
});
exports.clientSchema = clientSchema;
const clientSchemaRequest = clientSchema.omit({
    id: true,
    registrationDate: true,
});
exports.clientSchemaRequest = clientSchemaRequest;
const clientSchemaResponse = clientSchema.omit({
    password: true,
});
exports.clientSchemaResponse = clientSchemaResponse;
const clientListSchemaResponse = zod_1.z.array(clientSchemaResponse);
exports.clientListSchemaResponse = clientListSchemaResponse;
const clientSchemaUpdate = clientSchemaRequest.partial();
exports.clientSchemaUpdate = clientSchemaUpdate;
