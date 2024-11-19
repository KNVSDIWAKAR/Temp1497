const express = require("express");
const router = express.Router();

const createTxn = require("../handlers/transactionsData");

router.post("/createTxn", createTxn.createTxnFunction);

module.exports = router;
