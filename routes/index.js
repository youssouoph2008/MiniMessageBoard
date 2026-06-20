const { Router } = require('express');
const indexRouter = Router();

const messages = [
    {
        text: 'Hello, world!',
        user: 'Alice',
        timestamp: new Date()
    },
];

//INDEX
indexRouter.get("/", (req, res) => {
    res.render("index", {
        title: "Mini Message Board",
        messages,
    });
});

//FORM PAGE
indexRouter.get("/new", (req, res) => {
    res.render("form");
});

//HANDLE FORM SUBMISSION
indexRouter.post("/new", (req, res) => {
    const { text, user } = req.body;
    const newMessage = {
        text: messageText,
        user: messageUser,
        timestamp: new Date(),
    };
    messages.push(newMessage);
    res.redirect("/");
});

module.exports = indexRouter;
