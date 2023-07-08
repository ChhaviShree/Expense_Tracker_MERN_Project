const ExpenseSchema=require("../models/expenseModels")


exports.addExpense=async (req,res)=>{
    const {title,amount,category,description,date}=req.body;

    const income=IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try{
        if(!title || !category || !description || !date){
            return res.status(400).json({message:"All fields are required!!"})
        }
        if(amount<=0 || !amount ==='number'){
            return res.status(400).json({message:"Please enter valid amount!!"});
        }
        await income.save()
        res.status(200).json({message:'Income Added !!'})
    }catch(error){
        res.status(500).json({message:"Server error!"})
    }
    console.log(income)
}

exports.getExpense=async(req,res)=>{
    try{
        const incomes=await IncomeSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)

    }catch(error){
        res.status(500).json({message:"Server error!!"})

    }
}

exports.deleteExpense=async(req,res)=>{
    const {id}=req.params;
    IncomeSchema.findOneAndDelete(id)
    .then((income)=>{
        res.status(200).json({message:'Income deleted successfully'});

    }).catch((err)=>{
        res.status(500).json({message:"Server error"});
    })
}