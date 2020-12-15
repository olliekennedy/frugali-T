const budgetSchema = new mongoose.Schema({
Bills: number,
Entertainment: number,
Travel: number,
Loans: number,
Tea: number,
Hobbies: number,
Savings: number,
});
var User = mongoose.model('budget', budgetSchema);
module.exports = Budget;
