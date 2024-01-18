import express from "express";
import dotenv from 'dotenv';

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "All running fine!!!🎉✨"
    });
});

app.listen(PORT, () => {
    console.log(`Your site url is http://localhost:${PORT}`);
});