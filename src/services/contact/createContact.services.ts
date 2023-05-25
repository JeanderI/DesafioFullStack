import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";

const createContactService = async (contactData: any) => {
  const userRepository = AppDataSource.getRepository(Contact);

  const contact = userRepository.create({
    ...contactData,
  });

  await userRepository.save(contact);

  return contact;
};

export default createContactService;
