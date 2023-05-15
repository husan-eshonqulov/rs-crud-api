import express, { Router } from 'express';

import { addUser, getUsers, getUser } from '../controllers/users';

const router: Router = express.Router();

router.post('/', addUser);
router.get('/', getUsers);
router.get('/:id', getUser);

export default router;
