const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    reactions: [reactionSchema], // Use the schema directly
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Corrected typo: trimmed to trim
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
