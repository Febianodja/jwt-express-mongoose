const express = require("express");
const { Book } = require("../models/");

const router = express.Router();

router.get("/book", async (req, res) => {
  const bookList = await Book.find({});
  try {
    res.send(bookList);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/book", async (req, res) => {
  const bookList = await Book.create(req.body);
  try {
    res.send(bookList);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;