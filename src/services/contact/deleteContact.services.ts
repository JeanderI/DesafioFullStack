import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { AppError } from "../../errors";

const deleteContactService = async (contactId: number) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: contactId });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.remove(contact);
};

export default deleteContactService;
