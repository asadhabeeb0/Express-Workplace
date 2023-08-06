// const express = require("express");
// const app = express();
// app.get("/", (req,res) => {
// res.status(200).send("You are welcome to my home page. ");
// });
// app.get("/about", (req,res) => {
// res.status(200).send("You are welcome to my about page. ");
// });
// app.get("/contact", (req,res) => {
// res.status(200).send("You are welcome to my contact page. ");
// });
// app.get("/temp", (req,res) => {
// res.status(200).send("You are welcome to my temp page. ");
// });
// app.listen(7091, () => {
//     console.log("Listening to the port number 7091.")
// });

// const express = require("express");
// const app = express();
// app.get("/", (req,res) => {
// res.status(200).send("<h3>You are welcomed to my home page. </h3>");
// });
// app.get("/about", (req,res) => {
// res.status(200).send("<h3>You are welcomed to my about page. </h3>");
// });
// app.get("/contact", (req,res) => {
// res.status(200).send("<h3>You are welcomed to my contact page. </h3>");
// });
// app.get("/temp", (req,res) => {
// res.status(200).send("<h3>You are welcomed to my temp page. </h3>");
// });
// app.listen(7092, () => {
//     console.log("Listening to the port number 7092.")
// });

// const express = require("express");
// const app = express();
// app.get("/", (req,res) => {
// res.write("<h3>You are welcomed to my home page.</h3>");
// res.write("<h3>You are welcomed to my home page.</h3>");
// res.send();
// });
// app.get("/about", (req,res) => {
// res.write("<h3>You are welcomed to my about page.</h3>");
// res.write("<h3>You are welcomed to my about page.</h3>");
// res.send();
// });
// app.get("/contact", (req,res) => {
// res.write("<h3>You are welcomed to my contact page.</h3>");
// res.write("<h3>You are welcomed to my contact page.</h3>");
// res.send();
// });
// app.get("/temp", (req,res) => {
// res.write("<h3>You are welcomed to my temp page.</h3>");
// res.write("<h3>You are welcomed to my temp page.</h3>");
// res.send();
// });
// app.listen(7093, () => {
//     console.log("Listening to the port number 7093")
// });


// const express = require("express");
// const app = express();
// app.get("/", (req,res) => {
// res.send("<h3>You are welcomed to my home page. </h3>");
// });
// app.get("/about", (req,res) => {
// res.send({
//     id:2 ,
//     naame: "Anas" 
// });
// });
// app.get("/contact", (req,res) => {
// res.send({
//     id:3 ,
//     naame: "Bilal" ,
// });
// });
// app.get("/temp", (req,res) => {
// res.send({
//     id:1 ,
//     naame: "Badar" ,
// });
// });
// app.listen(7092, () => {
//     console.log("Listening to the port number 7092.")
// });

// const express = require("express");
// const app = express();
// app.get("/", (req,res) => {
// res.send("<h3>You are welcomed to my home page. </h3>");
// });
// app.get("/about", (req,res) => {
// res.send(
//     [
//         {
//             id:2 ,
//             naame: "Anas" 
//         },{
//     id:2 ,
//     naame: "Anas" 
// },{
//     id:2 ,
//     naame: "Anas" 
// }
//     ]
// );
// });
// app.get("/contact", (req,res) => {
// res.send([
//     {
//     id:3 ,
//     naame: "Bilal" ,
// },
// {
//     id:3 ,
//     naame: "Bilal" ,
// },
// {
//     id:3 ,
//     naame: "Bilal" ,
// }]
// );
// });
// app.get("/temp", (req,res) => {
// res.send([
//     {
//     id:3 ,
//     naame: "Bilal" ,
// },
// {
//     id:3 ,
//     naame: "Bilal" ,
// },
// {
//     id:3 ,
//     naame: "Bilal" ,
// }]);
// });
// app.listen(7095, () => {
//     console.log("Listening to the port number 7095")
// });


const express = require("express");
const app = express();
app.get("/", (req,res) => {
res.send("<h3>You are welcomed to my home page. </h3>");
});
app.get("/about", (req,res) => {
res.json(
    [
        {
            id:2 ,
            naame: "Anas" 
        },{
    id:2 ,
    naame: "Anas" 
},{
    id:2 ,
    naame: "Anas" 
}
    ]
);
});
app.get("/contact", (req,res) => {
res.json([
    {
    id:3 ,
    naame: "Bilal" ,
},
{
    id:3 ,
    naame: "Bilal" ,
},
{
    id:3 ,
    naame: "Bilal" ,
}]
);
});
app.get("/temp", (req,res) => {
res.json([
    {
    id:3 ,
    naame: "Bilal" ,
},
{
    id:3 ,
    naame: "Bilal" ,
},
{
    id:3 ,
    naame: "Bilal" ,
}]);
});
app.listen(7097, () => {
    console.log("Listening to the port number 7097")
});
