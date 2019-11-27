var express = require("express");
var router = express.Router();
const Cars = require("../src/models/carSchema");

/* GET users listing. */
router.get("/", async function(req, res, next) {
  try {
    const data = await Cars.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async function(req, res) {
  const car = new Cars(req.body);
  try {
    const data = await car.save();
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  const alllowedUpdates = [
    "name",
    "make",
    "numPlate",
    "color",
    "company",
    "price"
  ];
  const updates = Object.keys(req.body);
  const isvalidOrNot = updates.every(update =>
    alllowedUpdates.includes(update)
  );

  if (!isvalidOrNot)
    return res.status(400).send({ error: "Invalid Operation" });

  try {
    //to force updating to follow our schema and not bypass our middleware we find and then change it here and then pass it from middele ware
    const car = await Cars.findById(req.params.id);

    if (!car) return res.status(404).send();
    updates.forEach(update => (car[update] = req.body[update]));
    user = await car.save();
    res.send(car);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = await Cars.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).send();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/sameMake/:make", async function(req, res) {
  try {
    if (!req.params.make)
      return res.status(400).send("Pass The Model To Match");
    console.log(req.params.make);

    const data = await Cars.findSameModel(req.params.make);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
