const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require('./Routes');

require('dotenv').config();

const port = process.env.PORT || 4444;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use('/api/user', userRoutes);

app.get("/", (req, res) => {
    res.send("Hello, World!")
});
mongoose.connect(MONGO_URL);
app.listen(port, (error) => {
    if (error) {
        console.error("Server connection error:", error);
    } else {
        console.log(`Server connected successfully on port ${port}`);
    }
});
