require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Default Route (Root URL)
app.get('/', (req, res) => {
  res.send("✅ MEAN Notes Backend is Running");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Atlas Connected"))
.catch(err => console.log("❌ DB Error:", err));
app.get('/', (req, res) => {
  res.send("✅ MEAN Notes Backend is Running");
});

// Routes
const notesRoute = require("./routes/noteRoutes");
app.use("/api/notes", notesRoute);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
