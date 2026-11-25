
const express = require("express");

const app = express();

app.get("/health", (req, res) => {
    res.json({
        message: "Whodunit AI backend is running!"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
