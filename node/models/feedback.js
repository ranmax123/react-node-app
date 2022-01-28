const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  bodyLanguageRating: { type: Number, default: 0, max: 5 },

  bodyLanguageText: { type: String, default: null, required: true },

  reflectingBackRating: { type: Number, min: 1, max: 10 },

  reflectingBackText: { type: String, required: true },

  exploratoryQuestionRating: { type: Number, default: 0, max: 5 },

  exploratoryQuestionText: { type: String, required: true },

  comments: { type: String, required: true },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
