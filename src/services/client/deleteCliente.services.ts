import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";

const deleteClientService = async (userId: number) => {
  const userRepository = AppDataSource.getRepository(Client);
  const user = await userRepository.findOneBy({
    id: userId,
  });

  await userRepository.softRemove(user!);
};

export default deleteClientService;
