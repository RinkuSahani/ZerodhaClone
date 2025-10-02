const mongoose=require("mongoose");
const { userSchema } = require("../Schemas/SignupSchemas");

const User=new mongoose.model("user",userSchema);

module.exports={User};