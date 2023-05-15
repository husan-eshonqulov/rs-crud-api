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
    res.status(500).json({ msg: 'try again later' });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json({ users });
  } catch (err) {}
};

export { addUser, getUsers };
