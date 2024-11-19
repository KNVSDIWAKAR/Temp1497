const express = require("express");
const router = express.Router();

const card = require("../handlers/cardsData.js");

router.post("/createCard", card.createCardFunction);

module.exports = router;
