import { Router } from 'express';
import { createInterest, reviewInterest } from '../controllers/interest.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';

export const interestRouter = Router();

interestRouter.post('/', requireAuth, createInterest);
interestRouter.patch('/:id', requireAuth, reviewInterest);
