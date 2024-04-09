const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
require('dotenv').config();
const port = process.env.PORT || 4444;
const MONGO_URL = process.env.MONGO_URL;
const cors = require("cors");
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hello, World!")
})
mongoose.connect(MONGO_URL);
app.listen(port, (error) => {
    if (error) {
        console.error("Server connection error:", error);
    } else {
        console.log(`Server connected successfully on port ${port}`);
    }
});
