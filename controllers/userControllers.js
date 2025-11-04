import User from "../models/user.js";

export const loginUser = (req, res) =>{

}

export const registerUser = async (req,res) =>{
    const {email, password, username} = req.body ?? {};
    try {
        await User.create({
            email,
            password,
            username
        });
    } catch (err) {
        return res.status(400).json({
            status: 'error',
            data:err.message
        })
    }
}