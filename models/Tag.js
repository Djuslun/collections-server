const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  label: String,
  value: String,
},
  { timestamps: true, versionKey: false }
);

const Tag = mongoose.model("tags", tagsSchema);

module.exports = Tag