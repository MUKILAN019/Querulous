const express = require("express");
const app = express();

app.listen(4444, (error) => {
    if (error) {
        console.error("Server connection error:", error);
    } else {
        console.log("Server connected successfully on port 4444");
    }
});
