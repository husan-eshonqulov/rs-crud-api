import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

import User from '../models/User';

const addUser = async (req: Request, res: Response) => {
  const id = uuid();
  const { username, age, hobbies } = req.body;

  if (!username || !age || !hobbies) {
    return res
      .status(400)
      .json({ msg: 'username, age and hobbies must be provided' });
  }

  try {
    const newUser = new User(id, username, age, hobbies);
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
  } catch (err) {
    res.status(500).json({ msg: 'Try again later' });
  }
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id.length !== 36) {
    return res.status(400).json({ msg: 'Invalid user id' });
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

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, age, hobbies } = req.body;

  if (id.length !== 36) {
    return res.status(400).json({ msg: 'Invalid user id' });
  }

  if (!username || !age || !hobbies) {
    return res
      .status(400)
      .json({ msg: 'username, age and hobbies must be provided' });
  }

  try {
    const stat = await User.updateUser(id, username, age, hobbies);
    stat
      ? res.status(200).json({ msg: 'User updated' })
      : res.status(404).json({ msg: 'Page not found' });
  } catch (err) {
    res.status(500).json({ msg: 'Try again later' });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id.length !== 36) {
    return res.status(400).json({ msg: 'Invalid user id' });
  }

  try {
    const stat = await User.deleteUser(id);
    stat
      ? res.status(204).json({ msg: 'User removed' })
      : res.status(404).json({ msg: 'Page not found' });
  } catch (err) {
    res.status(500).json({ msg: 'Try again later' });
  }
};

export { addUser, getUsers, getUser, updateUser, deleteUser };
