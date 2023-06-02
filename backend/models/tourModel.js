const { Schema, model, Types } = require("../connection");

const userSchema = new Schema({
  title: { type: String, default: 'Untitled Page' },
  steps: { type: Array, default: [] },
  user: { type: Types.ObjectId, ref: 'user' },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("tour", userSchema);
