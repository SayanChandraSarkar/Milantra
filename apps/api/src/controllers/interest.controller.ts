import { Request, Response } from 'express';
import { respondToInterest, sendInterest } from '../services/interest.service.js';

export async function createInterest(req: Request, res: Response) {
  const senderId = req.userId as string;
  const result = await sendInterest(senderId, req.body.receiverId);
  res.status(201).json(result);
}

export async function reviewInterest(req: Request, res: Response) {
  const result = await respondToInterest(req.params.id, req.body.status);
  res.json(result);
}
