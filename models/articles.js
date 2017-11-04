const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  link: {type: String, required: true },
  snippet: {type: String, required: true},
  pub_date: {type: String, required: true },
  givenId: {type: String, required: true },
  dateAdded: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
