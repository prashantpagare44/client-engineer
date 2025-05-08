// routes/clientRoutes.js ya jo bhi file hai
import express from 'express';
import { getClientProfile , uploadProject} from '../controller/clientController.js'

 import {verifyToken} from '../middleware/verifyToken.js'

const router = express.Router();

router.get('/profile', verifyToken, getClientProfile);
router.get('/projects', verifyToken, uploadProject);


export default router;
