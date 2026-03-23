import { Router } from 'express';
import { authRouter } from './auth.routes.js';
import { chatRouter } from './chat.routes.js';
import { interestRouter } from './interest.routes.js';
import { profileRouter } from './profile.routes.js';

export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/profiles', profileRouter);
apiRouter.use('/interests', interestRouter);
apiRouter.use('/chats', chatRouter);
