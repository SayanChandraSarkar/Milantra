import { Router } from 'express';
import { createMessage, fetchConversation } from '../controllers/chat.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';

export const chatRouter = Router();

chatRouter.get('/:id', requireAuth, fetchConversation);
chatRouter.post('/:id/messages', requireAuth, createMessage);
