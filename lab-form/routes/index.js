var express = require("express");
var router = express.Router();
const Course = require("../src/models/course");

var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });
/* GET home page. */
router.get("/", function(req, res, next) {
  const info = {
    title: "Node Pug chand",
    address: "lhr",
    author: "Waqas Khan"
  };
  res.render("index", { info });
});

router.post("/show", urlencodedParser, async (req, res, next) => {
  course = {
    name: req.body.bookName,
    author: req.body.authorName
  };

  const cou = new Course(course);
  console.log(cou);

  try {
    const data = await cou.save();

    res.render("index", {
      title: req.body.bookName,
      address: req.body.authorName
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
