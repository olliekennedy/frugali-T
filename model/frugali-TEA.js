var mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  bills: Number,
  entertainment: Number,
  travel: Number,
  loans: Number,
  tea: Number,
  hobbies: Number,
  savings: Number
});
var Budget = mongoose.model('Budget', BudgetSchema);
module.exports = Budget;
