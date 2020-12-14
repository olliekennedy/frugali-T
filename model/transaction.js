var mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  description: String,
  category: String,
  amount: Number
});
var Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;
