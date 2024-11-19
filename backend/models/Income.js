const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  accountName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
    minlength: 16,
    maxlength: 16,
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
