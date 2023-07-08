const ExpenseSchema=require("../models/expenseModels")


exports.addExpense=async (req,res)=>{
    const {title,amount,category,description,date}=req.body;

    const expense=ExpenseSchema({
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
        await expense.save()
        res.status(200).json({message:'Expense Added !!'})
    }catch(error){
        res.status(500).json({message:"Server error!"})
    }
    console.log(expense)
}

exports.getExpense=async(req,res)=>{
    try{
        const expense=await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(expense)

    }catch(error){
        res.status(500).json({message:"Server error!!"})

    }
}

exports.deleteExpense=async(req,res)=>{
    const {id}=req.params;
    ExpenseSchema.findOneAndDelete(id)
    .then((expense)=>{
        res.status(200).json({message:'Expense deleted successfully'});

    }).catch((err)=>{
        res.status(500).json({message:"Server error"});
    })
}