const mongoose = require("mongoose");

//for creating a chema AND SETTTING UP MIDDLE WARE for hashing
const newSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String
  },
  tags: {
    type: [String]
  },
  date: {
    type: Date,
    default: Date.now()
  },
  isPublished: {
    type: Boolean,
    default: false
  }
});

newSchema.pre("save", async function(next) {
  next();
});

const Course = mongoose.model("Course", newSchema);

module.exports = Course;
