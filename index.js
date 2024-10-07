// const express=require("express");
// const app=express();


// app.use("/",(req,res,next)=>{
// console.log("this middle ware always run!");
// next()
// })
// app.get("/",(req,res,next)=>{
//     console.log("Home console!");
//     res.send("Home page");
//     next();
// })
// app.get("/about",(req,res)=>{
//     console.log("aboutpage!!");
//     res.send("hello about page!!!")
// })
// app.use("/",(req,res,next)=>{
//     console.log("middleware 1")
//     next();
// })
// app.use("/",(req,res)=>{
//     console.log("middle ware 2!")
// })

// app.listen(8000,()=>{
//     console.log("server runs on 8000!")
// })


// const express=require("express");
// const app =express();

// app.get("/",(req,res)=>{
//     console.log("Home console");
//     res.send("Homepage!");
// })
// app.get("/about",(req,res,next)=>{
//     console.log("about middleware 1");
//     next();
// },(req,res,next)=>{
//     console.log("about middleware@");
//     next();

// },(req,res)=>{

// console.log("about Pagae Data!");
// res.send("about page");
// })
// app.listen(8000,()=>{
//     console.log("server runs on 8000!");
// })


// const express=require("express");
// const app =express();
// const MyName=(req,res,next)=>{
//     console.log("this is App middleware!");
//     req.MyName="megha thakre";
//     next();
// }
// app.use(MyName);
// app.get("/",(req,res,next)=>{
//     console.log("Home Page");
//     console.log(req.MyName);
//     res.send("Hello Home page!" +req.MyName);
//     next()
// })
// app.listen(8000,()=>{
//     console.log("server runs on 8000!");
// })

const express=require("express");
const app= express();
const middleware=require("./middleware/middleware");
app.use(middleware);
app.get("/",(req,res)=>{
    console.log("Home page"+req.myclg);
    res.send("welcome To bhopal!!!"+req.myclg);
})
app.listen(8000,()=>{
    console.log("server runs on 8000!")
})
