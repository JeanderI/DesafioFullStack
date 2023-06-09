import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { IClientRequest } from "../../interfaces/clients.interfaces";
import { clientSchemaResponse } from "../../schemas/clients.schema";

const updateClientService = async (
  clientId: number,
  clientData: IClientRequest
) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({ where: { id: clientId } });

  const updatedClient = await clientRepository.save({
    ...client,
    ...clientData,
  });

  const updated = clientSchemaResponse.parse(updatedClient);

  return updated;
};

export default updateClientService;
