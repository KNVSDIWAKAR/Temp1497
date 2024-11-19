const express = require("express");
const router = express.Router();
const Income = require("../models/Income.js");

router.post("/postincome", async (req, res) => {
  const { accountName, accountNumber, amount, date, note, status } = req.body;

  if (!accountName || !accountNumber || !amount) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (accountNumber.length !== 16) {
    return res.status(400).json({ error: "Account number must be 16 digits." });
  }

  try {
    const newIncome = new Income({
      accountName,
      accountNumber,
      amount,
      date: date || new Date().toLocaleDateString(),
      note,
      status,
    });

    const savedIncome = await newIncome.save();
    res.status(201).json({
      message: "Income transaction saved successfully!",
      data: savedIncome,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error, please try again." });
  }
});

// GET: Retrieve all income transactions
router.get("/getincome", async (req, res) => {
  try {
    const incomes = await Income.find();
    res.status(200).json({ data: incomes });
  } catch (error) {
    res.status(500).json({ error: "Server error, please try again." });
  }
});

module.exports = router;
