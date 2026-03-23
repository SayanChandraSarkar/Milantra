import { Types } from 'mongoose';
import { ConversationModel } from '../models/Conversation.js';
import { MessageModel } from '../models/Message.js';

export async function getConversation(conversationId: string) {
  const conversation = await ConversationModel.findById(conversationId).lean();

  if (!conversation) {
    return null;
  }

  const messages = await MessageModel.find({ conversationId })
    .sort({ createdAt: 1 })
    .lean();

  return { ...conversation, messages };
}

export async function postMessage(conversationId: string, senderId: string, body: string) {
  return MessageModel.create({
    conversationId: new Types.ObjectId(conversationId),
    senderId: new Types.ObjectId(senderId),
    body
  });
}
