const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: (username) => /^[a-zA-Z0-9]+$/.test(username),
        message: 'Username can only contain alphanumeric characters.',
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/, 'Email does not match'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('User', userSchema);

module.exports = User;