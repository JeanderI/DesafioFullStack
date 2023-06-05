import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { IContactRequest } from "../../interfaces/contacts.interfaces";
import { AppError } from "../../errors";

const createContactService = async (
  contactData: IContactRequest,
  clientId: number
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findUser = await contactRepository.findOneBy({
    email: contactData.email,
  });

  if (findUser) {
    throw new AppError("Email already exists", 409);
  }

  const contact = contactRepository.create({
    ...contactData,
    client: clientId,
  });

  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
