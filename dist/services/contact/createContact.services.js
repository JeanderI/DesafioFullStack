"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const errors_1 = require("../../errors");
const createContactService = (contactData, clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.AppDataSource.getRepository(entities_1.Client);
    const contactRepository = data_source_1.AppDataSource.getRepository(entities_1.Contact);
    const client = yield clientRepository.findOne({
        where: {
            id: clientId,
        },
    });
    if (!client) {
        throw new errors_1.AppError("Client not found", 404);
    }
    const existingContact = yield contactRepository.findOne({
        where: { email: contactData.email, client: { id: clientId } },
    });
    if (existingContact) {
        throw new errors_1.AppError("Email already exists for this client", 409);
    }
    const contact = contactRepository.create(Object.assign(Object.assign({}, contactData), { client }));
    yield contactRepository.save(contact);
    return contact;
});
exports.default = createContactService;
