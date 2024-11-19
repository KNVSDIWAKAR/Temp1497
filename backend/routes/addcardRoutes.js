const express = require("express");
const { addCard } = require("../controllers/CardControl.js");

const router = express.Router();

// POST /api/cards
router.post("/postaddcard", addCard);

module.exports = router;
