import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/userModel.js"; // Make sure you added `.js` in path

import { authroute } from './routers/authroute.js';
import clientRoutes from "./routers/clientRoute.js";
import {Project } from './models'

dotenv.config();

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies
app.use('/api/client', clientRoutes);

// ✅ Routes
app.get("/", (req, res) => {
  res.send("This is the app");
});

// ✅ Using Router
app.use("/api/auth", authroute); // Auth routes

// ✅ Server Listening
app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});
