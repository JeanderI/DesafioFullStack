import { Request, Response } from "express";
import createClientService from "../services/client/createClient.services";

import deleteClientService from "../services/client/deleteCliente.services";
import updateClientService from "../services/client/updateClient.services";
import listClientService from "../services/client/listClient.services";
const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData = req.body;
  const newClient = await createClientService(clientData);
  return res.status(201).json(newClient);
};

const listClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.userId;
  const listClient = await listClientService(clientId);
  return res.status(200).json(listClient);
};

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.userId;
  const clientData = req.body;
  const clientUpdate = await updateClientService(clientId, clientData);
  return res.status(200).json(clientUpdate);
};

const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.userId;
  await deleteClientService(clientId);
  return res.status(204).json();
};

export {
  createClientController,
  listClientController,
  updateClientController,
  deleteClientController,
};
