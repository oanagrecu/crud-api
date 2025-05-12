import { v4 as uuidv4, validate as isUUID } from 'uuid';
import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../models/user.model';

const userModel = new UserModel();

export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await userModel.getAllUsers(); 
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userId } = req.params;

  if (!isUUID(userId)) {
    res.status(400).json({ message: 'Invalid userId format. Must be a valid UUID.' });
    return;
  }

  try {
    const user = await userModel.getUserById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username, age, hobbies } = req.body;

  const isValid =
    typeof username === 'string' &&
    typeof age === 'number' &&
    Array.isArray(hobbies) &&
    hobbies.every(hobby => typeof hobby === 'string');

  if (!isValid) {
    res.status(400).json({
      message: 'Invalid input. Required fields: username (string), age (number), hobbies (string[] or []).',
    });
    return;
  }

  try {
    const newUser = await userModel.createUser(username, age, hobbies);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userId } = req.params;

  if (!isUUID(userId)) {
    res.status(400).json({ message: 'Invalid userId format. Must be a valid UUID.' });
    return;
  }

  try {
    const updatedUser = await userModel.updateUser(userId, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userId } = req.params;

  if (!isUUID(userId)) {
    res.status(400).json({ message: 'Invalid userId format. Must be a valid UUID.' });
    return;
  }

  try {
    const success = await userModel.deleteUser(userId);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
};
