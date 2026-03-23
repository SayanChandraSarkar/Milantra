import { z } from 'zod';
import { UserModel } from '../models/User.js';

const updateProfileSchema = z.object({
  bio: z.string().min(10),
  familyDetails: z.string().min(10),
  preferences: z.object({
    ageRange: z.array(z.number()).length(2).optional(),
    locations: z.array(z.string()).optional(),
    communities: z.array(z.string()).optional(),
    languages: z.array(z.string()).optional()
  }),
  location: z.string(),
  community: z.string(),
  languages: z.array(z.string())
});

function ageToDateBounds(minAge: number, maxAge: number) {
  const now = new Date();
  const youngestDob = new Date(now.getFullYear() - minAge, now.getMonth(), now.getDate());
  const oldestDob = new Date(now.getFullYear() - maxAge - 1, now.getMonth(), now.getDate());
  return { oldestDob, youngestDob };
}

export async function getProfiles(filters: Record<string, string | undefined>) {
  const minAge = Number(filters.minAge ?? 18);
  const maxAge = Number(filters.maxAge ?? 99);
  const { oldestDob, youngestDob } = ageToDateBounds(minAge, maxAge);

  const query: Record<string, unknown> = {
    dateOfBirth: { $gte: oldestDob, $lte: youngestDob }
  };

  if (filters.location) {
    query.location = { $regex: filters.location, $options: 'i' };
  }

  if (filters.community) {
    query.community = { $regex: `^${filters.community}$`, $options: 'i' };
  }

  if (filters.language) {
    query.languages = filters.language;
  }

  return UserModel.find(query)
    .select('firstName lastName location community languages bio isVerified dateOfBirth')
    .sort({ createdAt: -1 })
    .lean();
}

export async function updateProfile(userId: string, input: unknown) {
  const data = updateProfileSchema.parse(input);

  return UserModel.findByIdAndUpdate(userId, data, {
    new: true,
    runValidators: true
  }).lean();
}
