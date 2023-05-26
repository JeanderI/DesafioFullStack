import { DeepPartial } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { IContact } from "../../interfaces/contact.interfaces";

const createContactService = async (
  contactData: IContact,
  clientId: number | undefined
) => {
  const userRepository = AppDataSource.getRepository(Contact);

  const contact = userRepository.create({
    ...contactData,
    client: clientId as DeepPartial<number>,
  });

  await userRepository.save(contact);

  return contact;
};

export default createContactService;
