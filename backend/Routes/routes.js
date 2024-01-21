import { Router } from "express";
import { homePage, infoPage } from "../Controllers/controller.js";

const routes = Router();

routes.get("/", homePage);
routes.get('/info', infoPage);

export default routes;