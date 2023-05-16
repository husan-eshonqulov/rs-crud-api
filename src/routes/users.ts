import express, { Router } from 'express';

import {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/users';

const router: Router = express.Router();

router.post('/', addUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
