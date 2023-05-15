import { Request, Response } from 'express';

import User from '../models/User';

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json({ users });
  } catch (err) {}
};

export { getUsers };
