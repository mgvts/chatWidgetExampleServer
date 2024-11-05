const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors({
    origin: [
        'http://localhost:5173',          // для локальной разработки
        'https://mgvts.github.io',        // для продакшена
        'http://localhost:4173'           // для preview режима
    ],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

app.post("/chat", (req, res) => {
    const { message } = req.body;
    if (message == "radio") {
        res.json({
            content: `Получено: ${message}`,
            timestamp: new Date().toISOString(),
            options: {
                radio: ["Ответ 1", "Ответ 2"],
            },
        });
    } else if (message == "checkbox") {
        res.json({
            content: `Получено: ${message}`,
            timestamp: new Date().toISOString(),
            options: {
                checkbox: ["Выбор А", "Выбор Б"],
            },
        });
    } else {
        res.json({
            content: `Получено: ${message}`,
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
