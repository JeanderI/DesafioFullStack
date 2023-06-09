import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";
import { AppError } from "../errors";

const verifyContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactId = parseInt(req.params.id);

  const contactRespository = AppDataSource.getRepository(Contact);

  const contact = await contactRespository.findOneBy({
    id: contactId,
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }
  return next();
};

export default verifyContactExists;
