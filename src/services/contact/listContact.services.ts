import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";

const listContactsService = async () => {
  const contactRespository = AppDataSource.getRepository(Contact);

  const contactList = await contactRespository.find();

  return contactList;
};

export default listContactsService;
