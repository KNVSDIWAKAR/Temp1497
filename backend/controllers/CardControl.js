const Card = require("../models/CardModel.js");

// Add a new card
exports.addCard = async (req, res) => {
  try {
    const {
      bankName,
      cardHolder,
      cardType,
      paymentNetwork,
      cardNumber,
      expiryDate,
      cvv,
    } = req.body;

    if (
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
};
