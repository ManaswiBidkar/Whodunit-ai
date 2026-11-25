
const express = require("express");
const router = express.Router();

const caseData = {
    id: "case-001",
    title: "Murder at Blackwood Manor",
    victim: "Lord Edward Blackwood",
    killerId: 3,
    suspects: [
        { id: 1, name: "Alice", alibi: "I was reading in the library." },
        { id: 2, name: "James", alibi: "I was working in my office." },
        { id: 3, name: "Sophia", alibi: "I was preparing dinner." },
        { id: 4, name: "Oliver", alibi: "I was outside in the garden." },
        { id: 5, name: "Emma", alibi: "I was sleeping in my room." }
    ]
};

// Public case: never send the killer ID
router.get("/new", (req, res) => {
    const { killerId, ...publicCase } = caseData;
    res.json(publicCase);
});

// Player accusation
router.post("/accuse", (req, res) => {
    const { suspectId } = req.body;

    if (!suspectId) {
        return res.status(400).json({
            message: "Please provide suspectId"
        });
    }

    const correct = Number(suspectId) === caseData.killerId;

    res.json({
        correct,
        message: correct
            ? "Correct! You found the killer!"
            : "Wrong suspect. Keep investigating!"
    });
});

module.exports = router;
