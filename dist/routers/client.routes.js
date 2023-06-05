"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controllers_1 = require("../controllers/client.controllers");
const validateData_middleware_1 = require("../middlewares/validateData.middleware");
const clients_schema_1 = require("../schemas/clients.schema");
const ensureTokenIsValid_middleware_1 = __importDefault(require("../middlewares/ensureTokenIsValid.middleware"));
const clientRoutes = (0, express_1.Router)();
clientRoutes.post("", (0, validateData_middleware_1.validateDataMiddleware)(clients_schema_1.clientSchemaRequest), client_controllers_1.createClientController);
clientRoutes.get("", ensureTokenIsValid_middleware_1.default, client_controllers_1.listClientsController);
clientRoutes.patch("", ensureTokenIsValid_middleware_1.default, (0, validateData_middleware_1.validateDataMiddleware)(clients_schema_1.clientSchemaRequest), client_controllers_1.updateClientController);
clientRoutes.delete("/:id", ensureTokenIsValid_middleware_1.default, client_controllers_1.deleteClientController);
exports.default = clientRoutes;
