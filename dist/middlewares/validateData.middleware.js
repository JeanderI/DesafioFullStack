"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDataMiddleware = void 0;
const validateDataMiddleware = (schema) => (req, res, next) => {
    const data = schema.parse(req.body);
    req.body = data;
    return next();
};
exports.validateDataMiddleware = validateDataMiddleware;
