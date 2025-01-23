require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get ("/twitter", (req, res) => {
    res.send("mujtaba shah");
})

app.get ("/login", (req, res) => {
    res.send("<h1>please login </h1>");
})

app.listen(PORT, () => {
    console.log(`Example app listening at${PORT}`);
});