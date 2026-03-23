import { InferSchemaType, Schema, Types, model } from 'mongoose';

const conversationSchema = new Schema(
  {
    participants: [{ type: Types.ObjectId, ref: 'User', required: true }],
    participantKey: { type: String, required: true, unique: true, index: true },
    matchedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

conversationSchema.index({ participants: 1 });

export type ConversationDocument = InferSchemaType<typeof conversationSchema>;
export const ConversationModel = model('Conversation', conversationSchema);
