import { Router } from "express";
import { homePage, infoPage, createUser } from "../Controllers/controller.js";

const routes = Router();

routes.get("/", homePage);
routes.get('/info', infoPage);

routes.post("/", createUser);

export default routes;