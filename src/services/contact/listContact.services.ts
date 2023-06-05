import { AppDataSource } from "../../data-source";
import { Client, Contact } from "../../entities";
import { AppError } from "../../errors";

const listContactsService = async (clientId: number) => {
  const contactRespository = AppDataSource.getRepository(Contact);

  const clientRepository = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const contacts: Contact[] = await contactRespository.find({
    where: {
      client: client,
    },
  });

  return contacts;
};

export default listContactsService;
