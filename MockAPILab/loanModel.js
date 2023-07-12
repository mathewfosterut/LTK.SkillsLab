const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const loanSchema = new Schema({
    loanId: Number,
	borrowers: [
		{
			pairId: Number,
			firstName: String,
			lastName: String,
			phone: String,
		},
	]
});

const Loan = mongoose.model('Loan', loanSchema)

module.exports = Loan;