require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const createError = require("http-errors");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");

const routes = require("./routes");

const URL = process.env.MONGO_DB_URL;
const PORT = process.env.PORT || 3000;

const app = express();

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("DB connection failed ", err));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// compress responses
app.use(compression());

app.use(express.json());

app.use(routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    error: err.message || "Something went worng",
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
