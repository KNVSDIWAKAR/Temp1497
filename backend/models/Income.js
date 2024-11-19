const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  senderName: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ["cash", "card", "bankTransfer", "upi"],
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: () => new Date().toLocaleDateString(),
  },
  note: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "Completed",
    enum: ["Completed", "Pending"],
  },
});

module.exports = mongoose.model("Income", incomeSchema);
