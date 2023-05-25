import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";

const listClientsService = async () => {
  const clientRespository = AppDataSource.getRepository(Client);

  const clientList = await clientRespository.find();

  return clientList;
};

export default listClientsService;
