const feedbackModel = require("../models/feedback");
const Errors = require("../helpers/errors");

exports.create = (req, res, next) => {
  const {
    bodyLanguageRating,
    bodyLanguageText,
    reflectingBackRating,
    reflectingBackText,
    exploratoryQuestionRating,
    exploratoryQuestionText,
    comments,
  } = req.body;

  if (!bodyLanguageText || !bodyLanguageText.length) {
    return next(new Errors.ValidationError("Body Language field is required"));
  }

  if (!reflectingBackText || !reflectingBackText.length) {
    return next(
      new Errors.ValidationError("Reflecting Back field is required")
    );
  }

  if (!exploratoryQuestionText || !exploratoryQuestionText.length) {
    return next(
      new Errors.ValidationError("Exploratory Question field is required")
    );
  }

  if (!comments || !comments.length) {
    return next(new Errors.ValidationError("Comments are required"));
  }

  return feedbackModel
    .create({
      bodyLanguageRating: bodyLanguageRating,
      bodyLanguageText: bodyLanguageText,
      reflectingBackRating: reflectingBackRating,
      reflectingBackText: reflectingBackText,
      exploratoryQuestionRating: exploratoryQuestionRating,
      exploratoryQuestionText: exploratoryQuestionText,
      comments: comments,
    })
    .then((feedback) => {
      res.status(200).json({
        success: true,
        data: feedback,
        message: "Saved Successfully",
      });
    })
    .catch(next);
};
