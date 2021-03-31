const express = require("express");
const { Student } = require("../models/");

const router = express.Router();

  router.get("/student", async (req, res) => {
    const student = await Student.find({}).populate("class");
    try {
      res.send(student);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

router.get("/student/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  try {
    res.send(student);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.delete("/student/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  try {
    res.send(student);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.patch("/student/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body);
  try {
    res.send(student);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/student", async (req, res) => {
  const student = await Student.create(req.body);
  try {
    res.send(student);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
