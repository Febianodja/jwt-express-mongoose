const express = require("express");
const { Class } = require("../models/");

const router = express.Router();

router.get("/class", async (req, res) => {
  const classRoom = await Class.find({});
  try {
    res.send(classRoom);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/class", async (req, res) => {
  const classRoom = await Class.create(req.body);
  try {
    res.send(classRoom);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
