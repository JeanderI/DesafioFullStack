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
exports.deleteClientController = exports.updateClientController = exports.listClientController = exports.createClientController = void 0;
const createClient_services_1 = __importDefault(require("../services/client/createClient.services"));
const deleteCliente_services_1 = __importDefault(require("../services/client/deleteCliente.services"));
const updateClient_services_1 = __importDefault(require("../services/client/updateClient.services"));
const listClient_services_1 = __importDefault(require("../services/client/listClient.services"));
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientData = req.body;
    const newClient = yield (0, createClient_services_1.default)(clientData);
    return res.status(201).json(newClient);
});
exports.createClientController = createClientController;
const listClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = res.locals.userId;
    const listClient = yield (0, listClient_services_1.default)(clientId);
    return res.status(200).json(listClient);
});
exports.listClientController = listClientController;
const updateClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = res.locals.userId;
    const clientData = req.body;
    const clientUpdate = yield (0, updateClient_services_1.default)(clientId, clientData);
    return res.status(200).json(clientUpdate);
});
exports.updateClientController = updateClientController;
const deleteClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = res.locals.userId;
    yield (0, deleteCliente_services_1.default)(clientId);
    return res.status(204).json();
});
exports.deleteClientController = deleteClientController;
