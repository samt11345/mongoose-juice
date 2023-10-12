const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    
    reactions: [reactionSchema],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
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
