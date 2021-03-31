const express = require("express");
const { PinjamBuku } = require("../models/");
const { route } = require("./StudentController");

const router = express.Router();

router.get("/pinjambuku", async (req, res) => {
  const listPinjam = await PinjamBuku.find({}, "-__v")
    .populate("detail", "-__v")
    .populate("studentName", "-__v -class -score -nomerAbsen");
  try {
    res.send(listPinjam);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/pinjambuku", async (req, res) => {
  const listPinjam = await PinjamBuku.create(req.body);
  try {
    res.send(listPinjam);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.delete("/pinjambuku/:id", async (req, res) => {
  const listPinjam = await PinjamBuku.findByIdAndDelete(req.params.id);
  try {
    res.send(listPinjam);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
