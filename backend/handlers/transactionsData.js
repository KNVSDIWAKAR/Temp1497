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

async function getRecentTransactions(req, res) {
  const { userId } = req.query; // Expect userId to be passed as a query parameter

  if (!userId) {
    return res.status(400).json({ error: "User ID is required." });
  }

  try {
    const recentTransactions = await Transaction.find({ userId })
      .sort({ date: -1 }) // Sort by date in descending order
      .limit(10); // Limit to the 10 most recent transactions

    res.status(200).json({ data: recentTransactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch recent transactions." });
  }
}

module.exports = {
  createTxnFunction,
  getRecentTransactions,
};
