import { AppDataSource } from "../../data-source";
import { Client, Contact } from "../../entities";
import { IContactRequest } from "../../interfaces/contacts.interfaces";
import { AppError } from "../../errors";

const createContactService = async (
  contactData: IContactRequest,
  clientId: number
) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const contactRepository = AppDataSource.getRepository(Contact);

  const client = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const existingContact = await contactRepository.findOne({
    where: { email: contactData.email, client: { id: clientId } },
  });

  if (existingContact) {
    throw new AppError("Email already exists for this client", 409);
  }

  const contact = contactRepository.create({
    ...contactData,
    client,
  });

  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
