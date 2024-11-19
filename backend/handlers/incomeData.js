const Income = require("../models/Income.js");
const User = require("../models/user.js");

async function createIncomeFunction(req, res) {
  const { username, senderName, paymentMethod, amount, date, note, status } =
    req.body;
  if (!senderName || !paymentMethod || !amount) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newIncome = new Income({
      username,
      senderName,
      paymentMethod,
      amount,
      date: date || new Date().toLocaleDateString(),
      note,
      status,
    });

    const savedIncome = await newIncome.save();

    const user = await User.findOne({ username });
    if (user) {
      user.balance += Number(amount); // Add amount to balance
      user.income += Number(amount); // Add amount to income

      await user.save(); // Save updated user document
    } else {
      return res.status(404).json({ error: "User not found." });
    }

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
