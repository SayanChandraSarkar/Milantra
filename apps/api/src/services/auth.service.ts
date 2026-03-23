import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { env } from '../config/env.js';
import { UserModel } from '../models/User.js';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  dateOfBirth: z.string(),
  gender: z.string(),
  location: z.string(),
  community: z.string(),
  languages: z.array(z.string()).default(['English'])
});

export async function registerUser(input: unknown) {
  const data = registerSchema.parse(input);
  const existingUser = await UserModel.findOne({ email: data.email.toLowerCase() }).lean();

  if (existingUser) {
    throw new Error('User already exists');
  }

  const passwordHash = await bcrypt.hash(data.password, 10);
  const user = await UserModel.create({
    ...data,
    email: data.email.toLowerCase(),
    passwordHash,
    dateOfBirth: new Date(data.dateOfBirth),
    bio: '',
    familyDetails: '',
    preferences: {
      ageRange: [25, 35],
      locations: [],
      communities: [],
      languages: []
    }
  });

  return issueToken(user.id);
}

export async function loginUser(email: string, password: string) {
  const user = await UserModel.findOne({ email: email.toLowerCase() });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    throw new Error('Invalid credentials');
  }

  return issueToken(user.id);
}

function issueToken(userId: string) {
  return {
    token: jwt.sign({ sub: userId }, env.JWT_SECRET, { expiresIn: '7d' })
  };
}
