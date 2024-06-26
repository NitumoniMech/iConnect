const express=require('express');
const passport=require("passport");
const ExtractJwt=require("passport-jwt").ExtractJwt;
const JwtStrategy=require("passport-jwt").Strategy;
const mongoose=require("mongoose");

const authRoutes=require("./routes/auth");
const experienceRoutes=require("./routes/experience");
const educationRoutes=require("./routes/education");
const skillRoutes=require("./routes/skill");
const projectRoutes=require("./routes/project");
const postRoutes=require("./routes/post");
const likeRoutes=require("./routes/like");
const commentRoutes=require("./routes/comment");
const connectionRoutes=require("./routes/connection");
const User=require("./models/User");

const cors=require('cors');
const bodyParser=require('body-parser');
const profiles= require('./routes/profile');
const cookieParser=require("cookie-parser");

require("dotenv").config();
require('./db/conn');
require("dotenv").config();

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin:["http://localhost:3000"],
    method:["POST","GET"],
    credentials:true,
}));


app.get("/", (req,res)=>{
    res.send("i am working");
});

//app.use will take 2 arguments. First will be the prefix to the route. prefix ex: /auth /skills etc
app.use("/auth",authRoutes);
app.use("/experience",experienceRoutes);
app.use("/education",educationRoutes);
app.use("/skill",skillRoutes);
app.use("/project",projectRoutes);
app.use("/post",postRoutes);
app.use("/like",likeRoutes);
app.use("/comment",commentRoutes);
app.use("/profile",profiles);
app.use("/connection",connectionRoutes);

app.listen(8000, ()=>{
    console.log("Server running on port 8000");
});
