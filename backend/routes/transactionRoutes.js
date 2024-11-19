const express = require("express");
const router = express.Router();

const transaction = require("../handlers/transactionsData");

router.post("/createTxn", transaction.createTxnFunction);
router.get("/recentTransactions/:username", transaction.getRecentTransactions);
router.get("/allTransactions/:username", transaction.getAllTransactions);

module.exports = router;
