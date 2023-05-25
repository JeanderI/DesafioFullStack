import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";

const updateClientService = async (userId: number, userData: any) => {
  const userRespository = AppDataSource.getRepository(Client);

  const user = await userRespository.findOneBy({ id: userId });

  const updateUser = userRespository.create({
    ...user,
    ...userData,
  });

  await userRespository.save(updateUser);

  /* const update = listUserSchema.parse(updateUser); */

  return updateUser;
};

export default updateClientService;
