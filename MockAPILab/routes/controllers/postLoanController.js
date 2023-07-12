const Loan = require('../../loanModel');

const postLoanController = {
    
    async addLoan(req, res, next) {
        try {
            const {loanId, borrowers} = req.body;
            const loan = await Loan.create({loanId, borrowers});
            res.locals.loan = loan;
            return next()
        } catch (err) {
            return next({log: 'Error in postLoanController addLoan', status: 500})
        }
    }
}

module.exports = postLoanController