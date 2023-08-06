const { Router } = require("express");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Now we are at express js.");
});

app.get("/about", (req, res) => {
    res.send("Now we are at about page of express js.");
});
app.listen(7098, () => {
console.log("Listening to the port number 7098.");
});
