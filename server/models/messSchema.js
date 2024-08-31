const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  day: { type: String, required: true },
  breakfast: { type: String, required: true },
  lunch: { type: String, required: true },
  dinner: { type: String, required: true },
  price: { type: Number, required: true },
});

 const messdb = new mongoose.model('mess', MenuSchema);
 module.exports = messdb;