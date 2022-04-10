const mongoose = require('mongoose');

let totalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    totalco2: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Total', totalSchema);
