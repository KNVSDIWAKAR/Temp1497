const Card = require("../models/card.js");

async function createCardFunction(req, res) {
  try {
    const {
      username,
      bankName,
      cardHolder,
      cardType,
      paymentNetwork,
      cardNumber,
      expiryDate,
      cvv,
    } = req.body;

    if (
      !username ||
      !bankName ||
      !cardHolder ||
      !cardType ||
      !paymentNetwork ||
      !cardNumber ||
      !expiryDate ||
      !cvv
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingCard = await Card.findOne({ cardNumber });
    if (existingCard) {
      return res.status(400).json({ error: "Card number already exists" });
    }

    const newCard = new Card({
      username,
      bankName,
      cardHolder,
      cardType,
      paymentNetwork,
      cardNumber,
      expiryDate,
      cvv,
    });
    await newCard.save();

    res.status(201).json({ message: "Card added successfully", card: newCard });
  } catch (error) {
    console.error("Error adding card:", error);
    res.status(500).json({ error: "Server error" });
  }
}

async function fetchCardsFunction(req, res) {
  const { username } = req.params;

  try {
    // Find all cards for the username
    const cards = await Card.find({ username });

    if (cards.length > 0) {
      res.status(200).json(cards);
    } else {
      res.status(404).json({ error: "No cards found for this user." });
    }
  } catch (error) {
    console.error("Error fetching cards:", error);
    res.status(500).json({ error: "An error occurred while fetching cards." });
  }
}

module.exports = {
  createCardFunction,
  fetchCardsFunction,
};
