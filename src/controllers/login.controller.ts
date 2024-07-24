import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import userLoginService from "../services/sessions/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
  try {
    const data: IUserLogin = req.body;
    const token = await userLoginService(data);
    return res.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }
};

export { userLoginController };
