import express, { Router } from 'express';

import { addUser, getUsers } from '../controllers/users';

const router: Router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);

export default router;
