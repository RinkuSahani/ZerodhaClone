const mongoose = require("mongoose");
const { PositionsSchemas } = require("../Schemas/PositionsSchema");

const PositionsModels=new mongoose.model("Position",PositionsSchemas);

module.exports={ PositionsModels };