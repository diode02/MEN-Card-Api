const mongoose = require("mongoose");

//for creating a chema AND SETTTING UP MIDDLE WARE for hashing
const newSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  make: {
    type: Number,
    required: true
  },
  numPlate: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  color: {
    type: String,
    default: "NA"
  },
  company: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});
newSchema.statics.findSameModel = function(make) {
  return this.find({ make });
};
const Cars = mongoose.model("Cars", newSchema);

module.exports = Cars;
