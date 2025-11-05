import User from "../models/user.js";
import bcrypt from 'bcrypt';

export const loginUser = (req, res) =>{
    
}

export const registerUser = async (req,res) =>{
    const {email, password, username} = req.body ?? {};
    try {
        const hashPass = bcrypt.hashSync(password,10);
        await User.create({
            email,
            password,
            username
        });
        return res.status(201).json({
            status: 'success',
            data:'user successfully register'
        })
    } catch (err) {
        return res.status(400).json({
            status: 'error',
            data:err.message
        })
    }
}