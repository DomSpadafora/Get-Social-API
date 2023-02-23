const { Schema, model, Types } = require('mongoose');

//need to create Reaction (Schema Only)

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


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
