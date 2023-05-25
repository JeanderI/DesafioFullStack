import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import clientRoutes from "./routers/client.routes";
import contactRoutes from "./routers/contact.routes";
import loginRoutes from "./routers/login.routes";

const app: Application = express();
app.use(express.json());

app.use("/clients", clientRoutes);
app.use("/contacts", contactRoutes);
app.use("/login", loginRoutes);

app.use(handleErrors);
export default app;
