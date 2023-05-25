import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { AppError } from "../../errors";
/* import { Ilogin } from "../../interfaces/login.interfaces"; */
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async (data: any) => {
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const user: Client | null = await userRepository.findOneBy({
    email: data.email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(user.id),
  });

  return { token: token };
};

export default loginService;
