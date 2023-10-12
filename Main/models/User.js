const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email:{
      type: String,
      required: true,
      unique: true,
      match:[/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/,"Email does not match"]
      
    },
    
    // inPerson: {
    //   type: Boolean,
    //   default: true,
    // },
    // startDate: {
    //   type: Date,
    //   default: Date.now(),
    // },
    // endDate: {
    //   type: Date,
    //   default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    // },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
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



const User = model('user', userSchema);

module.exports = User;
