
const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
    const caseData = {
        title: "Murder at Blackwood Manor",
        victim: "Lord Edward Blackwood",
        suspects: [
            {
                id: 1,
                name: "Alice",
                alibi: "I was reading in the library."
            },
            {
                id: 2,
                name: "James",
                alibi: "I was working in my office."
            },
            {
                id: 3,
                name: "Sophia",
                alibi: "I was preparing dinner."
            },
            {
                id: 4,
                name: "Oliver",
                alibi: "I was outside in the garden."
            },
            {
                id: 5,
                name: "Emma",
                alibi: "I was sleeping in my room."
            }
        ]
    };

    res.json(caseData);
});

module.exports = router;
