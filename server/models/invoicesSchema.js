const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

 const invoicedb = new mongoose.model('invoices', noticeSchema);
 module.exports = invoicedb