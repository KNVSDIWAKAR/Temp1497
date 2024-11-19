const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction.js");

router.post("/posttransaction", async (req, res) => {
  try {
    const { accountName, accountNumber, amount, date, note } = req.body;

    if (accountNumber.length !== 16) {
      return res
        .status(400)
        .json({ error: "Account number must be 16 digits." });
    }

    const newTransaction = new Transaction({
      accountName,
      accountNumber,
      amount,
      date: date || new Date().toLocaleDateString(),
      note,
    });

    await newTransaction.save();
    res.status(201).json({
      message: "Transaction saved successfully!",
      data: newTransaction,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
});

module.exports = router;
