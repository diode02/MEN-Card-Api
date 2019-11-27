var express = require("express");
var router = express.Router();
const Course = require("../src/models/course");
/* GET users listing. */
router.get("/", async function(req, res, next) {
  try {
    const course = await Course.find({});
    res.status(200).send(course);
  } catch (error) {
    console.log("h");

    res.status(500).send(error);
  }
});

router.post("/", async (req, res, next) => {
  const user = new Course(req.body);
  try {
    const data = await user.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = await Course.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).send();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
