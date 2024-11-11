const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors({
    origin: [
        'http://localhost:5173',         
        'https://mgvts.github.io',       
        'http://localhost:4173'          
    ],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.body);
    next();
});

app.post("/chat", (req, res) => {
    const { message } = req.body;
    if (message == "radio") {
        res.json({
            content: `Received: ${message}`,
            timestamp: new Date().toISOString(),
            options: {
                radio: ["answer 1", "answer 2"],
            },
        });
    } else if (message == "checkbox") {
        res.json({
            content: `Received: ${message}`,
            timestamp: new Date().toISOString(),
            options: {
                checkbox: ["choose A", "choose B"],
            },
        });
    } else {
        res.json({
            content: `Received: ${message}`,
            timestamp: new Date().toISOString(),
        });
    }
});

app.get("/chat", (req, res) => {
    res.json({
        content: "get recived",
        timestamp: new Date().toISOString(),
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на ${port}`);
});
