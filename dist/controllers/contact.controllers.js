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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactController = exports.updateContactController = exports.listContactController = exports.createContactController = void 0;
const createContact_services_1 = __importDefault(require("../services/contact/createContact.services"));
const updateContact_services_1 = __importDefault(require("../services/contact/updateContact.services"));
const listContact_services_1 = __importDefault(require("../services/contact/listContact.services"));
const deleteContact_services_1 = __importDefault(require("../services/contact/deleteContact.services"));
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = res.locals.userId;
    const contactData = req.body;
    const newContact = yield (0, createContact_services_1.default)(contactData, clientId);
    return res.status(201).json(newContact);
});
exports.createContactController = createContactController;
const listContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = parseInt(req.params.id);
    const listContacts = yield (0, listContact_services_1.default)(contactId);
    return res.status(200).json(listContacts);
});
exports.listContactController = listContactController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = parseInt(req.params.id);
    const contactData = req.body;
    const contactUpdate = yield (0, updateContact_services_1.default)(contactId, contactData);
    return res.status(200).json(contactUpdate);
});
exports.updateContactController = updateContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = parseInt(req.params.id);
    yield (0, deleteContact_services_1.default)(contactId);
    return res.status(204).json();
});
exports.deleteContactController = deleteContactController;
