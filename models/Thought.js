const { Schema, model } = require('mongoose');

//need to create Reaction (Schema Only)

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reaction:  [reactionSchema]
      //array of reactions created with the reactionSchema 

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () { 
  return this.reactions.maxlength
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
