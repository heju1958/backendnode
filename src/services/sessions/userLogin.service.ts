import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../error/appError";

const userLoginService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Invalid user or password", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid user or password", 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
    subject: user.id,
  });

  return token;
};

export default userLoginService;
