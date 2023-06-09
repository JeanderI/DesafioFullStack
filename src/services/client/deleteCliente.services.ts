import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";

const deleteClientService = async (clientId: number) => {
  const userRepository = AppDataSource.getRepository(Client);
  const client = await userRepository.findOneBy({
    id: clientId,
  });
  if (!client) {
    throw new Error("Client not found");
  }
  await userRepository.remove(client);
};

export default deleteClientService;
