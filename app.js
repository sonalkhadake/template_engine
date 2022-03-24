const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const User = require("./Models/User");
app.set("view engine", "ejs");

app.use(express.json());

app.get("/home", (req, res) => {
  User.find().then((data) => {
    res.render("temp", { data: data, heading: "Users" });
  });
});

app.post("/api/post", (req, res) => {
  const body = req.body;

  const user = new User({
    name: body.name,
    active: body.active,
    mobile: body.mobile,
    age: body.age,
    place: body.place,
  });

  user.save().then((data) => {
    res.json({ message: "User created Sucessfully", data: data });
  });
});
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://sonalikhadake:RsFtxgLsBbfZOQDQ@cluster0.i7efa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(data=>{
    console.log("connection is success")
}).catch(err=>{
    console.log(err);
})


app.listen(port, () => {
    console.log("your server is created at port"+port);
  });