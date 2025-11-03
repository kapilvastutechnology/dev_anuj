import mongoose from "mongoose";
export const  checkId = (req,res, next) =>{
    const {id} = req.params;
    if(!mongoose.isValidObjectId(id)) return res.status(400).json({
        status: 'Error',
        data: 'Please provide valid id'
    });

    req.id = id;
    next();
}