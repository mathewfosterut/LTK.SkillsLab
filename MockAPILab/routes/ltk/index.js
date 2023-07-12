const express = require('express');

const getLoanController = require('../controllers/getLoanController');
const postLoanController = require('../controllers/postLoanController');
const patchLoanController = require('../controllers/patchLoanController');
const deleteLoanController = require('../controllers/deleteLoanController');
const router = express.Router();


router.get('/:id', getLoanController.getOne, (req, res) => res.status(200).json(res.locals.loan))
router.get('/', getLoanController.getAll, (req, res) => res.status(200).json(res.locals.loans))

router.post('/', postLoanController.addLoan, (req, res) => res.status(200).json(res.locals.loan))

router.patch('/update/:loanId/:pairId', patchLoanController.updateBorrower, (req, res) => res.status(200).json(res.locals.loan))
router.patch('/delete/:loanId/:pairId', patchLoanController.deleteBorrower, (req, res) => res.status(200).json(res.locals.loan))

router.delete('/:id', deleteLoanController.deleteLoan, (req, res) => res.status(200).json(res.locals.loan))


module.exports = router;