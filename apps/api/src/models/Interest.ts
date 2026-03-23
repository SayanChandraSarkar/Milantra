import { InferSchemaType, Schema, Types, model } from 'mongoose';

const interestSchema = new Schema(
  {
    senderId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
    receiverId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
    status: {
      type: String,
      enum: ['PENDING', 'ACCEPTED', 'REJECTED'],
      default: 'PENDING',
      index: true
    }
  },
  { timestamps: true }
);

interestSchema.index({ senderId: 1, receiverId: 1 }, { unique: true });

export type InterestDocument = InferSchemaType<typeof interestSchema>;
export const InterestModel = model('Interest', interestSchema);
