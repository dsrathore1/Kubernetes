import userModel from "../Database/Model/user.js";

export function homePage(req, res) {
    res.render("home.ejs", {
        heading: "Backend-Home Page",
        message: "Home Page"
    });
}

export function infoPage(req, res) {
    res.json({
        message: "Your data is provided below",
        data: [
            {
                id: 1,
                name: "Rocky",
                emailID: "rocky123@gmail.com"
            },
            {
                id: 2,
                name: "John Doe",
                emailID: "johndeo123@gmail.com"

            }
        ]
    });
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