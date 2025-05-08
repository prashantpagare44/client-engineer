import express from 'express';
import { registerUser, loginUser } from "../controller/authController.js";

export const authroute = express.Router(); // Correctly named router

authroute.post('/register', registerUser); // Use authroute here
authroute.post('/login', loginUser);        // Use authroute here
