import { Router } from 'express';
import { listProfiles, putProfile } from '../controllers/profile.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';

export const profileRouter = Router();

profileRouter.get('/', listProfiles);
profileRouter.put('/me', requireAuth, putProfile);
