// const express = require("express");
// const app = express();
// // app.use(express.static(staticpath));
// app.get("/", (req, res) => {
//     res.send("Now we are at express js.");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9098, () => {
// console.log("Listening to the port number 9098.");
// });

// const express = require("express");
// const app = express();
// // console.log(__dirname);  
// app.get("/", (req, res) => {
//     res.send("Now we are at express js.");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9098, () => {
// console.log("Listening to the port number 9098.");
// });


// const path = require("path")
// const express = require("express");
// const app = express();
// //  First way
// // const staticpath = (path.join(__dirname,'./public')); 
// // app.use('/static',express.static(staticpath));
// // Second way
// // app.use('/static',express.static(path.join(__dirname,'./public')));
// // Third way
// app.use('/static',express.static('./public/css'));
// app.get("/", (req, res) => {
//     res.send("Now we are at express js.");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9097, () => {
// console.log("Listening to the port number 9097");
// });


// Lecture 4,5

// const path = require("path")
// const express = require("express");
// const app = express();
// app.use('/static',express.static('./public/css'));

// app.get("/", (req, res) => {
//     res.send("Now we are at express js.");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9097, () => {
// console.log("Listening to the port number 9097");
// });


// // Lecture 6 

// const path = require("path")
// const express = require("express");
// const app = express();
// const staticpath = path.join(__dirname,'../public'); 
// // app.use('/static',express.static(staticpath));
// // to set the view engine
// app.set('view engine','hbs');
// // template engine request 
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// // app.get("/", (req, res) => {
// //     res.render("index", {
// //         channelName: "Bkw",
// //     });
// // });
// app.get("/", (req, res) => {
//     res.send("Now we are at express js.");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9071, () => {
// console.log("Listening to the port number 9071");
// });

// // To make changes in view/index.ejs for channelname
// const path = require("path")
// const express = require("express");
// const app = express();
// const staticpath = path.join(__dirname,'../public'); 
// app.set('view engine','hbs');
// app.get("/", (req, res) => {
//     res.render("index", {
//         channelName: "Bkw",
//     });
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9071, () => {
// console.log("Listening to the port number 9071");
// });

// const path = require("path")
// const express = require("express");
// const app = express();
// const staticpath = path.join(__dirname,'./public'); 
// app.set('view engine','hbs');
// giving view option
// //app.set('views', __dirname + 'views');
// // app.set('views', __dirname , '../views');
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9061, () => {
// console.log("Listening to the port number 9061");
// });

// const path = require("path")
// const express = require("express");
// const app = express();
// const staticpath = path.join(__dirname,'./public'); 
// app.set('view engine','ejs');
// app.get("/", (req, res) => {
//     res.render("index");
// });   
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9051, () => {
// console.log("Listening to the port number 9051");
// });


// Lecture 07 express

// const path = require("path");
// const express = require("express");
// const app = express();
// const staticpath = path.join(__dirname,'./public'); 
// app.set('view engine','ejs');
// app.get("/", (req, res) => {
//     res.render("index");
// });   
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9051, () => {
// console.log("Listening to the port number 9051");
// });

// change name of view directory  
// const path = require("path");
// const express = require("express");
// const app = express();
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// });   
// app.get("/", (req, res) => {
//     res.render("index word there");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9051, () => {
// console.log("Listening to the port number 9051");
// });

// For making changes in .ejs/.hbs in template and adding new pages having ejs
// const path = require("path");
// const express = require("express");
// const app = express();
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// app.get("/about", (req, res) => {
//     res.render("about");
// });

// // app.get("/", (req, res) => {
// //     res.render("index", {
// //         channelname : vinod ,
// //     });
// // });   
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9111, () => {
// console.log("Listening to the port number 9111");
// });


// Lecture 8
// const path = require("path");
// const express = require("express");
// const app = express();
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// app.get("/about", (req, res) => {
//     res.render("about");
// });

// // app.get("/", (req, res) => {
// //     res.render("index", {
// //         channelname : vinod ,
// //     });
// // });   
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9211, () => {
// console.log("Listening to the port number 9211");
// });

// Setting partials for about.ejs,index.ejs 
// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// app.get("/about", (req, res) => {
//     res.render("about");
// });

// // app.get("/", (req, res) => {
// //     res.render("index", {
// //         channelname : vinod ,
// //     });
// // });   
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9211, () => {
// console.log("Listening to the port number 9211");
// });


// Lecture 9
// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// app.get("/about", (req, res) => {
//     res.render("about");
// });

// // app.get("/", (req, res) => {
// //     res.render("index", {
// //         channelname : vinod ,
// //     });
// // });   
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.listen(9211, () => {
// console.log("Listening to the port number 9211");
// });

// Page not found
// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// const errorcoment = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// app.get("/about", (req, res) => {
//     res.render("about");
// });

// // app.get("/", (req, res) => {
// //     res.render("index", {
// //         channelname : vinod ,
// //     });
// // });   
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.get("/about/*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });    
// });
// app.listen(9211, () => {
// console.log("Listening to the port number 9211");
// });


// Lecture 10 Css
// Css addes
// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// const errorcoment = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// app.get("/about", (req, res) => {
//     res.render("about");
// });

// // app.get("/", (req, res) => {
// //     res.render("index", {
// //         channelname : vinod ,
// //     });
// // });   
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.get("/about/*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });    
// });
// app.listen(9333, () => {
// console.log("Listening to the port number 9333");
// });


// Lecture 11 Query String
// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// const errorcoment = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// app.get("/about", (req, res) => {
//     res.render("about");
// });

// // app.get("/", (req, res) => {
// //     res.render("index", {
// //         channelname : vinod ,
// //     });
// // });   
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.get("/about/*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });    
// });
// app.listen(9333, () => {
// console.log("Listening to the port number 9333");
// });

// Getting query string
// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// const errorcoment = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// app.get("/about", (req, res) => {
//     console.log(req.query)
//     res.render("about");
// });

// // app.get("/", (req, res) => {
// //     res.render("index", {
// //         channelname : vinod ,
// //     });
// // });   
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.get("/about/*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });    
// });
// app.listen(9333, () => {
// console.log("Listening to the port number 9333");
// });

// // Getting value of object temp
// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// const errorcoment = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// app.get("/about", (req, res) => {
//     console.log(req.query.temp)
//     res.render("about");
// });

// // app.get("/", (req, res) => {
// //     res.render("index", {
// //         channelname : vinod ,
// //     });
// // });   
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.get("/about/*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });    
// });
// app.listen(9333, () => {
// console.log("Listening to the port number 9333");
// });

// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// const errorcoment = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// }); 
// app.get("/about", (req, res) => {
//     console.log(req.query.gtype)
//     res.render("about");
// });  
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.get("/about/*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });    
// });
// app.listen(9333, () => {
// console.log("Listening to the port number 9333");
// });


// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// const errorcoment = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// });
// // app.get("/", (req, res) => {
// //     res.render("index", {
// // semester: 3
// //     }); 
// // app.get("/about", (req, res) => {
// //     res.render("about");
// // });  
// app.get("/about", (req, res) => {
//     res.render("about", {
// semester: 3
//     });
// }); 
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.get("/about/*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });    
// });
// app.listen(9333, () => {
// console.log("Listening to the port number 9333");
// });

// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// const errorcoment = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// });
// app.get("/about", (req, res) => {
//     res.render("about");
// }); 
// app.get("/about", (req, res) => {
//     res.render("about", {
//     semester: 3
//     });
// }); 
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.get("/about/*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("/about/*", (req, res) => {
//     res.send("Page is not being found after about");
// });
// app.get("*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("*", (req, res) => {
//     res.send("Page is not being found for incorrection");
// });

// app.listen(9444, () => {
// console.log("Listening to the port number 9444");
// });

// Insert dynamic rendering through object <%=university%>
// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// const errorcoment = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// });
// app.get("/", (req, res) => {
//     res.render("index", {
//      semester: 7 ,
//     });
// }); 
// app.get("/about", (req, res) => {
//     res.render("about");
// }); 
// app.get("/about", (req, res) => {
//     res.render("about", {
//      semester: 7 ,
//     });
// }); 
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.get("/about/*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("/about/*", (req, res) => {
//     res.send("Page is not being found after about");
// });
// app.get("*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("*", (req, res) => {
//     res.send("Page is not being found for incorrection");
// });
// app.listen(9555, () => {
// console.log("Listening to the port number 9555");
// });

// Rendering query string as object 
// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// const errorcoment = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// });
// // app.get("/about", (req, res) => {
// //     res.render("about");
// // }); 
// // app.get("/about", (req, res) => {
// //     res.render("about", {
// //      semester: 7 ,
// //     });
// // }); 
// // app.get("/about", (req, res) => {
// //     res.render("about", {
// //      semester: 78 , pointt: 96 ,
// //     });
// // }); 
// // app.get("/about", (req, res) => {
// //     res.render("about", {
// //      semester:  , pointt: 96 ,
// //     });
// // }); 
// // app.get("/about", (req, res) => {
// //     res.render("about", {
// //      semester: 78 , pointt:  ,
// //     });
// // }); 
// // app.get("/about", (req, res) => {
// //     res.render("about", {
// //      semester: , pointt: ,
// //     });
// // }); 
// // app.get("/about", (req, res) => {
// //     res.render("about", {
// //     semester: req.query.semester , pointt: 96 ,
// //     });
// // }); 
// app.get("/about", (req, res) => {
//     res.render("about", {
//     semester: 78 , pointt: req.query.semester ,
//     });
// }); 
// // app.get("/about", (req, res) => {
// //     res.render("about", {
// //     semester: req.query.semester , pointt: req.query.semester ,
// //     });
// // }); 
// app.get("/", (req, res) => {
//     res.render("index word there and / used again");
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });
// app.get("/about/*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("/about/*", (req, res) => {
//     res.send("Page is not being found after about");
// });
// app.get("*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("*", (req, res) => {
//     res.send("Page is not being found for incorrection");
// });

// app.listen(9555, () => {
// console.log("Listening to the port number 9555");
// });

// Lecture 12 API Express
const request = require("requests");
const path = require("path");
const express = require("express");
const app = express();
const ejs = require("ejs");
const staticpath = path.join(__dirname,'../public'); 
const templatepath = path.join(__dirname,'../public/template/views');
const partialspath = path.join(__dirname,'../public/template/views');
const errorcoment = path.join(__dirname,'../public/template/views');
app.set('view engine','ejs');
app.set('views', templatepath);
app.set("views", partialspath);
app.use(express.static(staticpath));   
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    request(`https://www.google.com/search?q=json+example&oq=&aqs=chrome.2.35i39i362l7j46i39i199i362i465.1758073j0j15&sourceid=chrome&ie=UTF-8`)
    .on("data",(chunk) => {
        const objedata=JSON.parse(chunk);
        const arrdata = [objedata];
        console.log(`city name is ${arrdata[0].name} and the temp is ${arrdata[0].main.temp}`);
        res.write(arrdata[0].name);   
    })
    .on("end",(err) => {
        if (err) return console.log("Connnection closed due to error", err);
     res.end();
    });
}); 
app.get("/about", (req, res) => {
    res.send("Now we are at about page of express js.");
});
app.get("/about/*", (req, res) => {
    res.render("not", {
    errorcoment : "Page could not be found"    , 
});
});
app.get("/about/*", (req, res) => {
    res.send("Page is not being found after about");
});
app.get("*", (req, res) => {
    res.render("not", {
    errorcoment : "Page could not be found"    , 
});
});
app.get("*", (req, res) => {
    res.send("Page is not being found for incorrection");
});
app.listen(9555, () => {
console.log("Listening to the port number 9555");
});


// const path = require("path");
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = path.join(__dirname,'../public'); 
// const templatepath = path.join(__dirname,'../public/template/views');
// const partialspath = path.join(__dirname,'../public/template/views');
// const errorcoment = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.set("views", partialspath);
// app.use(express.static(staticpath));   
// app.get("/", (req, res) => {
//     res.render("index");
// });
// app.get("/about", (req, res) => {
//     res.render("about");
// });
// app.get("/about", (req, res) => {
//     res.render("about", {
//     semester : 4   , pointt : 67 ,  
// });
// });
// app.get("/about", (req, res) => {
//     res.send("Now we are at about page of express js.");
// });

// app.get("/about/*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("/about/*", (req, res) => {
//     res.send("Page is not being found after about");
// });
// app.get("*", (req, res) => {
//     res.render("not", {
//     errorcoment : "Page could not be found"    , 
// });
// });
// app.get("*", (req, res) => {
//     res.send("Page is not being found for incorrection");
// });
// app.listen(9555, () => {
// console.log("Listening to the port number 9555");
// });
