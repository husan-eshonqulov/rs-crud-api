import express, { Router } from 'express';

import { addUser, getUsers, getUser, updateUser } from '../controllers/users';

const router: Router = express.Router();

router.post('/', addUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);

export default router;
