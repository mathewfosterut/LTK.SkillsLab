const Loan = require('../../loanModel');

const getLoanController = {
    // Get all loans
    async getAll(req, res, next) {
        try {
            const loans = await Loan.find({});
            res.locals.loans = loans;
            return next()
        } catch (err) {
            return next({log: 'Error in getLoanController getAll', status: 500})
        }
    },

    //Gets one loan based on loanId
    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const loan = await Loan.findOne({loanId: id})
            res.locals.loan = loan;
            return next();            
        } catch (err) {
            return next({log: 'Error in getLoanController getOne', status: 500})
        }
    }
}

module.exports = getLoanController