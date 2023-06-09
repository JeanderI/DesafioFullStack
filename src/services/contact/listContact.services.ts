import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { AppError } from "../../errors";

const listContactService = async (contactId: number) => {
  const contactRespository = AppDataSource.getRepository(Contact);

  const contact = await contactRespository.findOneBy({
    id: contactId,
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return contact;
};

export default listContactService;
