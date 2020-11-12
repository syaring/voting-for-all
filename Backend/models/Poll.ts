import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

const { ObjectId } = mongoose.Schema.Types;

const OptionSchema = new Schema(
  {
    option: {
      type: String,
    },
    participants: {
      type: [ObjectId],
      ref: 'User',
    },
  },
  {
    _id: false,
  },
);

export const PollSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    author: {
      type: ObjectId,
      ref: 'User',
    },
    dueDate: {
      type: Date,
      required: true,
    },
    participants: {
      type: [ObjectId],
      ref: 'User',
    },
    canMuliSelect: {
      type: Boolean,
      default: false,
    },
    options: {
      type: [OptionSchema],
      required: true,
    },
  },
);

PollSchema.index({ createdAt: 1, updatedAt: 1 });

export const Poll = mongoose.model('Poll', PollSchema);

export const UserTC = composeWithMongoose(Poll);
