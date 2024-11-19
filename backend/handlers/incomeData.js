const Income = require("../models/income.js");

async function createIncomeFunction(req, res) {
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
}

async function showIncomeFunction(req, res) {
  try {
    const incomes = await Income.find();
    res.status(200).json({
      message: "Incomes fetched successfully",
      data: incomes,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error, please try again." });
  }
}

module.exports = {
  createIncomeFunction,
  showIncomeFunction,
};
