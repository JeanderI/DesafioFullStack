import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { Client } from "../entities";

const verifyClientExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientId = parseInt(req.params.id);

  const clientRespository = AppDataSource.getRepository(Client);

  const client = await clientRespository.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }
  return next();
};

export default verifyClientExists;
