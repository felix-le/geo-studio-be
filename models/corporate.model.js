const mongoose = require('mongoose');

let corporateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    building: {
      type: Number,
      required: true,
    },
    water: {
      type: Number,
      required: true,
    },
    street: {
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

module.exports = mongoose.model('Corporate', corporateSchema);
