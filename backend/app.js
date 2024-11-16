//app.js file
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

const uRoutes = require("./routes/userRoute.js");

app.use("/user", uRoutes);

app.use((err, req, res, next) => {
  console.log(err);

  if (typeof err == "string") {
    return res.status(400).send({
      message: err,
    });
  }

  return res.status(400).send({
    message: err.message,
  });
});

module.exports = app;
