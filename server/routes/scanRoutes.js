const express = require("express");
const router = express.Router();
const { scanWebsite } = require("../controllers/scanController");

router.get("/", scanWebsite);

module.exports = router;
