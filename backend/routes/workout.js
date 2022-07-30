const express = require("express");
const router = express.Router();
// const data = require('../data');
// const restaurantsData = data.restaurants;

router.get("/", async (req, res) => {
  try {
    res.status(200).json({ hello: "Helo" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
