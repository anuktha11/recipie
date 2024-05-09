const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
   try {
       // Extract user input from request body
       const { username, email, phone, password } = req.body;

       // Check if the email already exists
       const existingUser = await User.findOne({ email });
       if (existingUser) {
           return res.status(400).json({ success: false, message: "Email already exists" });
       }

       // Hash the password
       const hashedPassword = await bcrypt.hash(password, 10);

       // Create a new user document with hashed password
       const newUser = new User({
           username,
           email,
           phone,
           password: hashedPassword
       });

       // Save the new user document to the database
       await newUser.save();

       // Send success response
       res.status(201).json({ success: true, message: "User created successfully" });
   } catch (error) {
       // Handle errors
       console.error("Error in signup:", error);
       res.status(500).json({ success: false, message: "Internal server error" });
   }
};

const login =async(req,res)=>{
    
}

module.exports = {
    signup,
    login
};
