import { Request, Response } from "express";
import createContactService from "../services/contact/createContact.services";

import updateContactService from "../services/contact/updateContact.services";
import { IContact } from "../interfaces/contacts.interfaces";
import listContactService from "../services/contact/listContact.services";
import deleteContactService from "../services/contact/deleteContact.services";
const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = res.locals.userId;
  const contactData: IContact = req.body;
  const newContact = await createContactService(contactData, clientId);
  return res.status(201).json(newContact);
};

const listContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = parseInt(req.params.id);
  const listContacts = await listContactService(contactId);
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
  await deleteContactService(contactId);
  return res.status(204).json();
};

export {
  createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
};
