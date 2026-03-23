import { InferSchemaType, Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    dateOfBirth: { type: Date, required: true, index: true },
    gender: { type: String, required: true },
    location: { type: String, required: true, index: true },
    community: { type: String, required: true, index: true },
    languages: [{ type: String, required: true }],
    bio: { type: String, default: '' },
    familyDetails: { type: String, default: '' },
    preferences: {
      ageRange: { type: [Number], default: [25, 35] },
      locations: { type: [String], default: [] },
      communities: { type: [String], default: [] },
      languages: { type: [String], default: [] }
    },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true }
);

userSchema.index({ location: 1, community: 1, languages: 1 });

export type UserDocument = InferSchemaType<typeof userSchema>;
export const UserModel = model('User', userSchema);
