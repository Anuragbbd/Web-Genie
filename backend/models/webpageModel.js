const { Schema, model, Types } = require("../connection");

const userSchema = new Schema({
  title: { type: String, default: 'Untitled' },
  description: { type: String },
  keywords: { type: Array, default: [] },
  user: { type: Types, ref: 'user' },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("webpages", userSchema);
