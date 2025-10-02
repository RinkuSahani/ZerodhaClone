require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");

const { HoldingsModel } = require("./Models/HoldingsModel.js");
const { OrdersModel } = require("./Models/OrdersModels.js");
const { PositionsModels } = require("./Models/PositionsModels.js");
const { User } = require("./Models/SignupModels.js");

const PORT = process.env.PORT || 8000;
const uri = process.env.MONGO_URL;

const mongoose = require("mongoose");

// Safe mongoose connection with error handling
mongoose.connect(uri)
.then(() => {
  console.log("Db connected");
})
.catch((err) => {
  console.error(" Db connection failed:", err.message);
  
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.get("/allHoldings", async (req, res) => {
  try {
    let newHoldings = await HoldingsModel.find({});
    res.json(newHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let newPositions = await PositionsModels.find({});
    res.json(newPositions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    console.log("order saved");
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/signup", async (req, res) => {
  try {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    console.log("new user has been registered!");
    res.json({ message: "User registered" });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login",async (req,res,next)=>{
   try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'});
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }); 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) ;
    }
     
     res.status(201).json({ message: "User logged in successfully", success: true });
     next();
  } catch (error) {
    console.error(error);
  }
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
