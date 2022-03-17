const mongoose = require("mongoose");

//create a new schema
const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
  },
  event: {
    type: Number,
    default: 100,
  },
});

// creating a colllection or model
const MenRanking = new mongoose.model("menRanking", menSchema);

// now schema or feilds and model or collection were created  so export the collection in main app file
module.exports = MenRanking;