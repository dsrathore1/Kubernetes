import express from "express";

const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "All running fine!!!🎉✨"
    });
});

app.listen(PORT, () => {
    console.log(`Your site url is http://localhost:${PORT}`);
});