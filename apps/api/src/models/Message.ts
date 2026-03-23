import { InferSchemaType, Schema, Types, model } from 'mongoose';

const messageSchema = new Schema(
  {
    conversationId: { type: Types.ObjectId, ref: 'Conversation', required: true, index: true },
    senderId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
    body: { type: String, required: true, trim: true, maxlength: 1000 }
  },
  { timestamps: true }
);

export type MessageDocument = InferSchemaType<typeof messageSchema>;
export const MessageModel = model('Message', messageSchema);
