import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { clientListSchemaResponse } from "../../schemas/clients.schema";

const listClientService = async (clientId: number) => {
  const clientRespository = AppDataSource.getRepository(Client);

  const findClient = await clientRespository.find({
    where: {
      id: clientId,
    },
    relations: ["contacts"],
  });
  const client = clientListSchemaResponse.parse(findClient);
  return client;
};

export default listClientService;
