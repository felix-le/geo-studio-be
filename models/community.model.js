const mongoose = require('mongoose');

let communitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    residential: {
      type: Number,
      required: true,
    },
    commercial: {
      type: Number,
      required: true,
    },
    industrial: {
      type: String,
      required: true,
    },
    onroad: {
      type: Number,
      required: true,
    },
    offroad: {
      type: Number,
      required: true,
    },
    water: {
      type: Number,
      required: true,
    },
    waste: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Community', communitySchema);
