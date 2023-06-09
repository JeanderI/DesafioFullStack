"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controllers_1 = require("../controllers/contact.controllers");
const validateData_middleware_1 = require("../middlewares/validateData.middleware");
const contact_schemas_1 = require("../schemas/contact.schemas");
const verifyContactExists_middleware_1 = __importDefault(require("../middlewares/verifyContactExists.middleware"));
const ensureTokenIsValid_middleware_1 = require("../middlewares/ensureTokenIsValid.middleware");
const contactRoutes = (0, express_1.Router)();
contactRoutes.post("", ensureTokenIsValid_middleware_1.ensureTokenIsValidMiddleware, (0, validateData_middleware_1.validateDataMiddleware)(contact_schemas_1.contactSchemaRequest), contact_controllers_1.createContactController);
contactRoutes.get("/:id", verifyContactExists_middleware_1.default, contact_controllers_1.listContactController);
contactRoutes.patch("/:id", ensureTokenIsValid_middleware_1.ensureTokenIsValidMiddleware, verifyContactExists_middleware_1.default, (0, validateData_middleware_1.validateDataMiddleware)(contact_schemas_1.contactSchemaRequest), contact_controllers_1.updateContactController);
contactRoutes.delete("/:id", ensureTokenIsValid_middleware_1.ensureTokenIsValidMiddleware, verifyContactExists_middleware_1.default, contact_controllers_1.deleteContactController);
exports.default = contactRoutes;
