import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";

const updateContactService = async (userId: number, userData: any) => {
  const userRespository = AppDataSource.getRepository(Contact);

  const user = await userRespository.findOneBy({ id: userId });

  const updateUser = userRespository.create({
    ...user,
    ...userData,
  });

  await userRespository.save(updateUser);

  /* const update = listUserSchema.parse(updateUser); */

  return updateUser;
};

export default updateContactService;
