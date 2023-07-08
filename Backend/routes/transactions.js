const { addIncome, getIncome, deleteIncome } = require('../controllers/income');

const router=require('express').Router();


router.post('/add-income',addIncome)
router.get('/get-incomes',getIncome)
router.delete('/delete-income/:id',deleteIncome)

module.exports=router;
