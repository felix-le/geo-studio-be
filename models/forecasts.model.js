const mongoose = require('mongoose');

let forecastsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    co2: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Forecasts', forecastsSchema);
