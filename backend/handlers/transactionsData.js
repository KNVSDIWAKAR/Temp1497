const Transaction = require("../models/transaction.js");

async function createTxnFunction(req, res) {
  try {
    const { receiverName, paymentMethod, amount, date, mode, note } = req.body;

    if (!receiverName || !paymentMethod || !amount || !mode) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newTransaction = new Transaction({
      receiverName,
      paymentMethod,
      amount,
      date: date || new Date().toLocaleDateString(),
      mode,
      note,
    });

    await newTransaction.save();

    res.status(201).json({
      message: "Transaction saved successfully!",
      data: newTransaction,
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error",
      details: err.message,
    });
  }
}

module.exports = {
  createTxnFunction,
};
