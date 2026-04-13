const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// View Engine
app.set("view engine", "ejs");

// ================= ROUTES =================

// HOME ROUTE (EJS Rendering)
app.get("/", (req, res) => {
  const users = [
    { id: 1, name: "Sravan" },
    { id: 2, name: "Kumar" },
  ];

  res.render("index", { users });
});

// SAMPLE API ROUTE
app.get("/sample", (req, res) => {
  res.json({ success: true, message: "API Working" });
});

// ================= DATABASE CONNECTION =================

const url = "mongodb://127.0.0.1:27017/userDB";

async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Database Connection Error:", error);
  }
}

// ================= SERVER =================

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
  connectDB();
});
