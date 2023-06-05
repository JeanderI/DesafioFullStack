import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { IClientRequest } from "../../interfaces/clients.interfaces";
import { clientSchemaResponse } from "../../schemas/clients.schema";

const updateClientService = async (clientData: IClientRequest) => {
  const clientRespository = AppDataSource.getRepository(Client);

  const client = await clientRespository.findOneBy({ email: clientData.email });

  const updateClient = clientRespository.create({
    ...client,
    ...clientData,
  });

  await clientRespository.save(updateClient);

  const updated = clientSchemaResponse.parse(updateClient);

  return updated;
};

export default updateClientService;
