const Loan = require('../../loanModel');

const patchLoanController = {
    //updates borrower information based on loanId and pairId
    async updateBorrower(req, res, next) {
        try {
            const { loanId, pairId } = req.params;
            const { firstName, lastName, phone } = req.body;
            const loan = await Loan.findOneAndUpdate(
                { loanId: loanId, 'borrowers.pairId': pairId },
                { $set : {
                    'borrowers.$.firstName': firstName,
                    'borrowers.$.lastName': lastName,
                    'borrowers.$.phone' : phone,
                }},
                {new: true}
            );
            res.locals.loan = loan;
            return next()
        } catch (err) {
            return next({log: 'Error in patchLoanController updateBorrower', status: 500})
        }
    },
    //deletes a borrower based on loanId and pairId
    async deleteBorrower(req, res, next) {
        try {
            const { loanId, pairId } = req.params;
            const loan = await Loan.findOneAndUpdate(
                {loanId: loanId},
                {$pull: {
                    borrowers: {
                        pairId: pairId
                    }
                }},
                {new: true}
            );
            res.locals.loan = loan;
            return next()
        } catch (err) {
            return next({log: 'Error in patchLoanController deleteBorrower', status: 500})
        }
    },
}

module.exports = patchLoanController