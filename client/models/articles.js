const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  link: String,
  dateCreated: String,
  dateAdded: { type: Date, default: Date.now }
});

const Book = mongoose.model("Article", articleSchema);

module.exports = Article;
