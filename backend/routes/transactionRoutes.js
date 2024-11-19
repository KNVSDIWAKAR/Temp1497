const express = require("express");
const router = express.Router();

const transaction = require("../handlers/transactionsData");

router.post("/createTxn", transaction.createTxnFunction);
router.get("/recentTransactions", transaction.getRecentTransactions);

module.exports = router;
