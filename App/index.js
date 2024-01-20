import express from "express";
import cors from 'cors'

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", "Template");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs", {
        topic: "K8s-Home Page",
        page: "Home"
    });
});

app.get("/about", (req, res) => {
    res.render("about.ejs", {
        topic: "K8s-About Page",
        page: "About"
    });
});

app.listen(PORT, () => {
    console.log(`Your site url is http://localhost:${PORT}`);
});