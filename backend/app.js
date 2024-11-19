const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Initialize the app
const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Update with your frontend's URL
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
const uRoutes = require("./routes/userRoute.js");
const transactionRoutes = require("./routes/transactionRoutes.js");
const incomeRoutes = require("./routes/incomeRoutes.js");
const addcardRoutes = require("./routes/addcardRoutes.js");

// Base Route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// API Routes
app.use("/user", uRoutes);
app.use("/api", transactionRoutes);
app.use("/api", incomeRoutes);
app.use("/api", addcardRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.log(err);

  if (typeof err === "string") {
    return res.status(400).send({
      message: err,
    });
  }

  return res.status(400).send({
    message: err.message,
  });
});

module.exports = app;
