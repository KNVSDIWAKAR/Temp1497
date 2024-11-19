const express = require("express");
const router = express.Router();

const card = require("../handlers/cardsData.js");

router.post("/createCard", card.createCardFunction);
router.get("/getCards/:username", card.fetchCardsFunction);

module.exports = router;