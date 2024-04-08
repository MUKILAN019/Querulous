const express = require("express");
const app = express();
const port = process.env.PORT || 4444;
app.listen(port, (error) => {
    if (error) {
        console.error("Server connection error:", error);
    } else {
        console.log("Server connected successfully on port 4444");
    }
});
