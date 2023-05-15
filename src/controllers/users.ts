import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

import User from '../models/User';

const addUser = async (req: Request, res: Response) => {
  const id: string = uuid();
  const {
    username,
    age,
    hobbies,
  }: { username: string; age: number; hobbies: string[] } = req.body;
  const newUser = new User(id, username, age, hobbies);

  if (!username || !age || !hobbies) {
    res.status(400).json({ msg: 'username, age and hobbies must be provided' });
  }

  try {
    await newUser.save();
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ msg: 'Try again later' });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json({ users, length: users.length });
  } catch (err) {}
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (id.length !== 36) {
    res.status(400).json({ msg: 'Invalid id' });
  }
  try {
    const user = await User.getUser(id);
    user
      ? res.status(200).json(user)
      : res.status(404).json({ msg: 'Page not found' });
  } catch (err) {
    res.status(500).json({ msg: 'Try again later' });
  }
};

export { addUser, getUsers, getUser };
