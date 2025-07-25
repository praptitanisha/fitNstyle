const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Environment variables
const app = express();

app.use(express.json()); // To parse JSON data

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Failed to connect to MongoDB", err));

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Listen to server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
