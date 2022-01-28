const router = require("express").Router();

const FeedbacController = require("../controllers/feedbackController");

router.post("/", FeedbacController.create);

module.exports = router;
