import mongoose from 'mongoose';
import { env } from './env.js';

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    return mongoose.connection;
  }

  await mongoose.connect(env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    maxPoolSize: 10
  });

  isConnected = true;
  return mongoose.connection;
}
