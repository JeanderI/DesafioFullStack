import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";

const createClientService = async (clientData: any) => {
  const userRepository = AppDataSource.getRepository(Client);

  const newUser = userRepository.create({
    ...clientData,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default createClientService;
