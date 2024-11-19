const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  accountName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "Completed" },
  date: { type: String, required: true },
  note: { type: String },
});

module.exports = mongoose.model("Transaction", transactionSchema);
