import { Request, Response } from "express";
import createClientService from "../services/client/createClient.services";
import listClientsService from "../services/client/listClient.services";
import updateClientService from "../services/client/updateClient.services";
import deleteClientService from "../services/client/deleteCliente.services";
const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData = req.body;
  const newClient = await createClientService(clientData);
  return res.status(201).json(newClient);
};

const listClientsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listClients = await listClientsService();
  return res.status(200).json(listClients);
};

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData = req.body;
  const clientUpdate = await updateClientService(clientData);
  return res.status(200).json(clientUpdate);
};

const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = parseInt(req.params.id);
  await deleteClientService(clientId);
  return res.status(204).json();
};

export {
  createClientController,
  listClientsController,
  updateClientController,
  deleteClientController,
};
