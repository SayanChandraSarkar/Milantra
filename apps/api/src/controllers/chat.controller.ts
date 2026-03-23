import { Request, Response } from 'express';
import { getConversation, postMessage } from '../services/chat.service.js';

export async function fetchConversation(req: Request, res: Response) {
  const result = await getConversation(req.params.id);
  res.json(result);
}

export async function createMessage(req: Request, res: Response) {
  const senderId = req.userId as string;
  const result = await postMessage(req.params.id, senderId, req.body.body);
  res.status(201).json(result);
}
