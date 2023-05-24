const { Schema, model } = require("../connection");

const userSchema = new Schema({
  siteName: { type: String, required: true },
  webpagesData: { type: Array, default: [] },
  options: { type: Object },
  created_at: Date,
  updated_at: Date,
});

module.exports = model("plugin", userSchema);