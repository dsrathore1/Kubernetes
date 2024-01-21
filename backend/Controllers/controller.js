import userModel from "../Database/Model/user.js";

export function homePage(req, res) {
    res.render("home.ejs", {
        heading: "Backend-Home Page",
        message: "Home Page"
    });
}

export async function infoPage(req, res) {
    const data = await userModel.find({});
    res.json(data);
}

export async function createUser(req, res) {
    const data = req.body;
    const user = await userModel(data);

    try {

        await user.save();

        res.json(user);
    } catch (error) {
        console.log(error)
    }
}