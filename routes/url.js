import express from 'express';
import { saveURL } from '../controllers/SaveURL.js';

const router = express.Router();

router.post('/save', saveURL);

export default router;