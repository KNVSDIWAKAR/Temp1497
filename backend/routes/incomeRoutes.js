const express = require("express");
const router = express.Router();

const income = require("../handlers/incomeData.js");

router.post("/createIncome", income.createIncomeFunction);
router.get("/showIncome", income.showIncomeFunction);

module.exports = router;
