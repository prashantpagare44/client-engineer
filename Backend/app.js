const express = require("express");
const cors = require("cors");
const userModel = require("./models/userModel");
const authroute = require("./routers/authroute"); // ✅ Fixed import issue

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// ✅ Routes
app.get("/", (req, res) => {
  res.send("This is the app");
});

// ✅ Using Router
app.use("/api/register", authroute); // Fixed route handling

// ✅ Server Listening
app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});
