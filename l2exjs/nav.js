// const express = require("express");
// const app = express();
// app.get("/", (req,res) => {
// res.send("You are welcome to my home page. ");
// });
// app.get("/about", (req,res) => {
// res.send("You are welcome to my about page. ");
// });
// app.get("/contact", (req,res) => {
// res.send("You are welcome to my contact page. ");
// });
// app.get("/temp", (req,res) => {
// res.send("You are welcome to my temp page. ");
// });
// app.listen(7096, () => {
//     console.log("Listening to the port number 7096.")
// });


// we use statusCode to reflect proper status for 
// example if the page is not found and we display 404 
// page then without using status code it shows status code 200 
// that is wrong so by using statusCode we reflect proper status.


const express = require("express");
const app = express();
app.get("/", (req,res) => {
res.status(200).send("You are welcome to my home page. ");
});
app.get("/about", (req,res) => {
res.status(200).send("You are welcome to my about page. ");
});
app.get("/contact", (req,res) => {
res.status(200).send("You are welcome to my contact page. ");
});
app.get("/temp", (req,res) => {
res.status(200).send("You are welcome to my temp page. ");
});
app.listen(7097, () => {
    console.log("Listening to the port number 7097")
});

