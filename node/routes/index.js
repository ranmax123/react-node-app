const router = require("express").Router();

router.use("/feedback", require("./feedback"));

module.exports = router;
