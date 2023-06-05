import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { AppError } from "../../errors";
import { IClientRequest } from "../../interfaces/clients.interfaces";
import { clientSchemaResponse } from "../../schemas/clients.schema";

const createClientService = async (clientData: IClientRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOneBy({
    email: clientData.email,
  });

  if (findClient) {
    throw new AppError("Email already exists", 409);
  }

  const newClient = clientRepository.create({
    ...clientData,
  });

  await clientRepository.save(newClient);

  const client = clientSchemaResponse.parse(newClient);

  return client;
};

export default createClientService;
