import { Types } from 'mongoose';
import { ConversationModel } from '../models/Conversation.js';
import { InterestModel } from '../models/Interest.js';

function buildParticipantKey(userA: string, userB: string) {
  return [userA, userB].sort().join(':');
}

export async function sendInterest(senderId: string, receiverId: string) {
  return InterestModel.findOneAndUpdate(
    {
      senderId: new Types.ObjectId(senderId),
      receiverId: new Types.ObjectId(receiverId)
    },
    {
      $set: {
        senderId: new Types.ObjectId(senderId),
        receiverId: new Types.ObjectId(receiverId),
        status: 'PENDING'
      }
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  ).lean();
}

export async function respondToInterest(interestId: string, status: 'ACCEPTED' | 'REJECTED') {
  const interest = await InterestModel.findByIdAndUpdate(
    interestId,
    { status },
    { new: true, runValidators: true }
  ).lean();

  if (!interest) {
    throw new Error('Interest not found');
  }

  if (status === 'ACCEPTED') {
    const senderId = interest.senderId.toString();
    const receiverId = interest.receiverId.toString();
    await ConversationModel.findOneAndUpdate(
      { participantKey: buildParticipantKey(senderId, receiverId) },
      {
        $setOnInsert: {
          participants: [interest.senderId, interest.receiverId],
          participantKey: buildParticipantKey(senderId, receiverId),
          matchedAt: new Date()
        }
      },
      { upsert: true, new: true }
    );
  }

  return interest;
}
