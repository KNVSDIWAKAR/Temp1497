const Transaction = require("../models/Transaction.js");
const Income = require("../models/Income.js");
const User = require("../models/user.js");

async function createTxnFunction(req, res) {
  try {
    const { username, receiverName, paymentMethod, amount, date, mode, note } =
      req.body;

    if (!receiverName || !paymentMethod || !amount || !mode) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const user = await User.findOne({ username });

    if (user.balance < amount) {
      return res.status(400).json({ error: "Funds Insufficient!" });
    }
    const newTransaction = new Transaction({
      username,
      receiverName,
      paymentMethod,
      amount,
      date: date || new Date().toLocaleDateString(),
      mode,
      note,
    });

    await newTransaction.save();

    if (user) {
      user.balance -= Number(amount);
      user.expenses += Number(amount);

      await user.save(); // Save updated user document
    } else {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(201).json({
      message: "Transaction saved successfully!",
      data: newTransaction,
    });
  } catch (err) {
    alert("Funds Insufficient!");
    res.status(500).json({
      error: "Internal Server Error",
      details: err.message,
    });
  }
}

async function getRecentTransactions(req, res) {
  const { username } = req.params;

  if (!username) {
    return res.status(400).json({ error: "User ID is required." });
  }

  try {
    const transactions = await Transaction.find({ username })
      .sort({ date: -1 })
      .limit(10);

    // Fetch the latest 10 incomes
    const incomes = await Income.find({ username })
      .sort({ date: -1 })
      .limit(10);

    // Combine and sort the records by date descending
    const combinedRecords = [...transactions, ...incomes].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    // Limit to the latest 10 combined records
    const latest10Records = combinedRecords.slice(0, 10);

    res.status(200).json(latest10Records);
  } catch (error) {
    console.error("Error fetching records:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching records." });
  }
}

async function getAllTransactions(req, res) {
  const { username } = req.params;

  if (!username) {
    return res.status(400).json({ error: "User ID is required." });
  }

  try {
    const transactions = await Transaction.find({ username });
    const incomes = await Income.find({ username });

    const combinedRecords = [...transactions, ...incomes].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    res.status(200).json(combinedRecords);
  } catch (error) {
    console.error("Error fetching records:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching records." });
  }
}

module.exports = {
  createTxnFunction,
  getRecentTransactions,
  getAllTransactions,
};
