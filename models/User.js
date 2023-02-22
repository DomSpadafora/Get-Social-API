const { Schema, model, } = require('mongoose');


// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'Username is needed',
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: 'Password is needed',
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    students: [
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

//Need to create a virtual called friendCount that retrieves the length of the user's friends array field on query???



const User = model('user', userSchema);

module.exports = User;
