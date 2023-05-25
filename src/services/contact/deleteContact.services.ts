import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";

const deleteContactService = async (userId: number) => {
  const userRepository = AppDataSource.getRepository(Contact);
  const user = await userRepository.findOneBy({
    id: userId,
  });

  await userRepository.softRemove(user!);
};

export default deleteContactService;
