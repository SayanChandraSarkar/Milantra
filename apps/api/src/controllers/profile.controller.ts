import { Request, Response } from 'express';
import { getProfiles, updateProfile } from '../services/profile.service.js';

export async function listProfiles(req: Request, res: Response) {
  const result = await getProfiles(req.query as Record<string, string | undefined>);
  res.json(result);
}

export async function putProfile(req: Request, res: Response) {
  const userId = req.userId as string;
  const result = await updateProfile(userId, req.body);
  res.json(result);
}
