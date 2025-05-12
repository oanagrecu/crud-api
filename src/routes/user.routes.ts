// src/routes/user.routes.ts
import { Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/user.controller';

const router = Router();

router.get('/api/users', getUsers);
router.get('/api/users/:userId', getUserById);
router.post('/api/users', createUser);
router.put('/api/users/:userId', updateUser);
router.delete('/api/users/:userId', deleteUser);

export default router;
