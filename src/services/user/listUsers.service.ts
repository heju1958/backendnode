import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const listUsersService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.find();

  return user;
};

export default listUsersService;
