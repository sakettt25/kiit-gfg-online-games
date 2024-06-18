import User from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import { Request, Response } from 'express';
import { config } from 'dotenv';

config();

const signup = async (req: Request, res: Response) => {
    try{
        if(!req.body.name || !req.body.email || !req.body.password){
            res.status(400).json({message: "Name, Email and Password are required"})
            return;
        }
        if(req.body.password.length < 8){
            res.status(400).json({message: "Password should be atleast 6 characters long"})
            return;
        }
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if(!emailRegex.test(req.body.email)){
            res.status(400).json({message: "Invalid Email"})
            return;
        }
        const user = await User.findOne({email: req.body.email});
        if(user){
            res.status(409).json({message: "User already exists, Please login"})
            return;
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await newUser.save();
        const token = await jwt.sign({user: newUser}, process.env.JWT_SECRET as string);
        res.status(201).json({
            message: "Signup Successful",
            data : {
                name : req.body.name,
                email : req.body.email,
                auth_token : token
            }
        })

    }catch(error){
        console.error(error);
        res.status(500).json({message: "Could not signup, check for Server Error"})
    }
}

export default signup;