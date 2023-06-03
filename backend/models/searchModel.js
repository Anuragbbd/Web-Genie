const { Schema, model } = require("../connection");

const userSchema = new Schema({
  siteName: { type: String, required: true },
  siteUrl: { type: String, required: true },
  note: { type: String, default: "Enter Search Keywords or Speak to search" },
  created_at: Date,
  updated_at: Date,
});

module.exports = model("plugin", userSchema);