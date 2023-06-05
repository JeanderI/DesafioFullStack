import { Request, Response } from "express";
import createContactService from "../services/contact/createContact.services";
import listContactsService from "../services/contact/listContact.services";
import updateContactService from "../services/contact/updateContact.services";
import deleteClientService from "../services/client/deleteCliente.services";
import { IContact } from "../interfaces/contacts.interfaces";
const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = req.user.id;
  const contactData: IContact = req.body;
  const newContact = await createContactService(contactData, clientId);
  return res.status(201).json(newContact);
};

const listContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = parseInt(req.params.id);
  const listContacts = await listContactsService(contactId);
  return res.status(200).json(listContacts);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = parseInt(req.params.id);
  const contactData = req.body;
  const contactUpdate = await updateContactService(contactId, contactData);
  return res.status(200).json(contactUpdate);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);
  await deleteClientService(contactId);
  return res.status(204).json();
};

export {
  createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
};
