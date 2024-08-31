const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    complaintType: {
      type: String,
      required: true,
    },
    complaintTitle: {
      type: String,
      required: true,
    },
    complaintDescription: {
      type: String,
      required: true,
    },
  });

  const Complaintdb = new mongoose.model("Complaints", complaintSchema);
  module.exports = Complaintdb;