const Loan = require('../../loanModel');

const deleteLoanController = {
    //deletes a loan object based on loanId
    async deleteLoan(req, res, next) {
        try {
            const {id} = req.params;
            const loan = await Loan.findOneAndDelete({loanId: id});
            res.locals.loan = loan;
            return next()
        } catch (err) {
            return next({log: 'Error in deleteLoanController deleteLoan', status: 500})
        }
    }
}

module.exports = deleteLoanController