import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  MONGODB_URI: z.string().min(1).default('mongodb://127.0.0.1:27017/milantra'),
  JWT_SECRET: z.string().min(10).default('super-secret-change-me'),
  CLIENT_URL: z.string().url().default('http://localhost:5173')
});

export const env = envSchema.parse(process.env);
