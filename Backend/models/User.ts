import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

const { ObjectId } = mongoose.Schema.Types;

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    social: {
      type: String,
      enum: ['Kakao', 'Naver'],
      required: true,
    },
    socialId: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
    },
    myPolls: {
      type: [ObjectId],
      ref: 'Poll',
      default: [],
    },
    castedPolls: {
      type: [ObjectId],
      ref: 'Poll',
      default: [],
    },
  },
);

UserSchema.index({ createdAt: 1, updatedAt: 1 });

export const User = mongoose.model('User', UserSchema);

export const UserTC = composeWithMongoose(User);
