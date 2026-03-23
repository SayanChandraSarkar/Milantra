import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { connectToDatabase } from '../config/db.js';
import { ConversationModel } from '../models/Conversation.js';
import { InterestModel } from '../models/Interest.js';
import { MessageModel } from '../models/Message.js';
import { UserModel } from '../models/User.js';

function participantKey(a: string, b: string) {
  return [a, b].sort().join(':');
}

async function main() {
  await connectToDatabase();

  await Promise.all([
    MessageModel.deleteMany({}),
    ConversationModel.deleteMany({}),
    InterestModel.deleteMany({}),
    UserModel.deleteMany({})
  ]);

  const passwordHash = await bcrypt.hash('password123', 10);

  const [aisha, rohan, zara] = await UserModel.create([
    {
      email: 'aisha@example.com',
      passwordHash,
      firstName: 'Aisha',
      lastName: 'Khan',
      dateOfBirth: new Date('1996-04-12'),
      gender: 'Woman',
      location: 'New York',
      community: 'Urdu',
      languages: ['English', 'Urdu'],
      bio: 'Product designer who values family, faith, and long conversations.',
      familyDetails: 'Close-knit family of five based in Queens.',
      preferences: { ageRange: [28, 35], locations: ['New York', 'New Jersey'], communities: ['Urdu'], languages: ['English', 'Urdu'] },
      isVerified: true
    },
    {
      email: 'rohan@example.com',
      passwordHash,
      firstName: 'Rohan',
      lastName: 'Patel',
      dateOfBirth: new Date('1993-09-08'),
      gender: 'Man',
      location: 'Jersey City',
      community: 'Gujarati',
      languages: ['English', 'Hindi', 'Gujarati'],
      bio: 'Engineer who enjoys community volunteering and weekend travel.',
      familyDetails: 'Parents in Edison and one married sister.',
      preferences: { ageRange: [25, 32], locations: ['New York', 'New Jersey'], communities: ['Gujarati'], languages: ['English', 'Hindi'] },
      isVerified: false
    },
    {
      email: 'zara@example.com',
      passwordHash,
      firstName: 'Zara',
      lastName: 'Ali',
      dateOfBirth: new Date('1995-01-20'),
      gender: 'Woman',
      location: 'Chicago',
      community: 'Punjabi',
      languages: ['English', 'Punjabi'],
      bio: 'Physician with a warm family-oriented outlook.',
      familyDetails: 'Large extended family spread across the Midwest.',
      preferences: { ageRange: [29, 36], locations: ['Chicago'], communities: ['Punjabi', 'Urdu'], languages: ['English', 'Punjabi'] },
      isVerified: true
    }
  ]);

  const interest = await InterestModel.create({
    senderId: aisha._id,
    receiverId: rohan._id,
    status: 'ACCEPTED'
  });

  const conversation = await ConversationModel.create({
    participants: [aisha._id, rohan._id],
    participantKey: participantKey(String(aisha._id), String(rohan._id)),
    matchedAt: new Date()
  });

  await MessageModel.create([
    {
      conversationId: conversation._id,
      senderId: aisha._id,
      body: 'Hi Rohan, nice to connect here.'
    },
    {
      conversationId: conversation._id,
      senderId: rohan._id,
      body: 'Likewise, I would love to learn more about your design work.'
    }
  ]);

  console.log('Seeded users, interests, and messages', interest.id);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
