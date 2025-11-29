import Contact from "../models/contact.js";
import Admin from '../models/Admin.js';
import jwt from "jsonwebtoken";  // FIXED

// GET all users/messages
export const getAllUsers = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error("Fetch error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// POST (save contact form data)
export const userPost = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const savedData = await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Message saved successfully!",
      data: savedData
    });

  } catch (error) {
    console.error("Error saving message:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// GET user data (for future use)
export const getUserData = (req, res) => {
  console.log("get user data");
};

// Admin login
export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password required"
      });
    }

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid username"
      });
    }

    if (password !== admin.password) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token
    });

  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// Get all messages for admin dashboard
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: messages
    });
  } catch (error) {
    console.error("Fetch messages error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
