import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users/index";
import { instanceToPlain } from "class-transformer";

import createUserService from "../services/user/createUser.service";
import listUserService from "../services/user/listUser.service";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";
import listUsersService from "../services/user/listUsers.service";

import { IUserUpdate } from "../interfaces/users/index";
import { User } from "../entities/user.entity";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user: IUserRequest = req.body;
    const createdUser = await createUserService(user);
    return res.status(201).json(instanceToPlain(createdUser));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listUserController = async (req: Request, res: Response) => {
  const id: string = req.user.id;
  const user = await listUserService(id);
  return res.json(instanceToPlain(user));
};

const listUsersController = async (req: Request, res: Response) => {
  const user = await listUsersService();
  return res.json(instanceToPlain(user));
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const user: IUserUpdate = req.body;
    const id: string = req.params.id;
    const updatedUser = await updateUserService(user, id);
    if (updatedUser instanceof User) {
      return res.json(instanceToPlain(updatedUser));
    }
    return res.status(updatedUser[1] as number).json({
      message: updatedUser[0],
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  await deleteUserService(id);
  return res.status(204).send();
};

export {
  createUserController,
  listUserController,
  updateUserController,
  deleteUserController,
  listUsersController,
};
