const express = require("express");
const cors = require("cors");

const app = express();

const caseRoutes = require("./case");

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        message: "Whodunit AI backend is running!"
    });
});

app.use("/api/cases", caseRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});