import { Router } from "express";
import { homePage, infoPage, createUser } from "../Controllers/controller.js";
import userModel from "../Database/Model/user.js";

const routes = Router();

routes.get("/", homePage);
routes.get('/info', infoPage);

routes.post("/", createUser);

routes.delete("/delete", async (req, res) => {
    await userModel.deleteMany();
    res.send("Delete all data successfully");
});

export default routes;