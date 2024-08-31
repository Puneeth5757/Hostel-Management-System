const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  suggestionTitle: {
    type: String,
    required: true,
  },
  suggestionDescription: {
    type: String,
    required: true,
  },
});

const Suggestiondb = new mongoose.model('Suggestions', suggestionSchema);
module.exports = Suggestiondb;
