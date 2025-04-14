import bcrypt from "bcrypt";
import User from "../models/userModel.js"

export const registerUser = async (req,res)=>{
    const {name,email,password ,role,skills}=req.body;
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            name,
            email,
            password:hassedPassword,
            role,
            skills: role ==="engineer"?skills:[]
        });
        await newUser.save();
        res.json({message:"user registered successfully"});

    }
    catch(error){
        res.status(400).json({message:"registration failed"});

    }
}