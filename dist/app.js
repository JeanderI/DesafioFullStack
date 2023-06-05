"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const errors_1 = require("./errors");
const cors_1 = __importDefault(require("cors"));
const client_routes_1 = __importDefault(require("./routers/client.routes"));
const contact_routes_1 = __importDefault(require("./routers/contact.routes"));
const login_routes_1 = __importDefault(require("./routers/login.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/clients", client_routes_1.default);
app.use("/contacts", contact_routes_1.default);
app.use("/login", login_routes_1.default);
app.use(errors_1.handleErrors);
exports.default = app;
