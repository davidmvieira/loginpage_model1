import { Router } from "express";
import * as User from './controllers/User.js'

User.createTable();
const router = Router();

router.post('/user', User.insert)
router.put('/user/update', User.update)
router.get('/users', User.getAll)
router.get('/user', User.getById)
router.delete('/user/delete',User.deletedbyId)

export default router;