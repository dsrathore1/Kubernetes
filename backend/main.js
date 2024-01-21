import express from "express";
import { config } from 'dotenv';
import cors from 'cors';

import routes from "./Routes/routes.js";
import connectDB from "./Database/connectDB.js";

config();

const PORT = process.env.PORT ?? 4001;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', "Templates");
app.set("view engine", "ejs");

app.use(routes);

app.listen(PORT, () => {
    console.log(`Your url is http://localhost:${PORT}`);
    // setTimeout(() => {
    //     process.exit();
    // }, 5000);
});