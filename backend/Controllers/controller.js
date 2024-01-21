
export function homePage(req, res) {
    res.render("home.ejs", {
        heading: "MERN_APP-Home Page",
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