const mongoose = require("mongoose");
const { OrdersSchemas } = require("../Schemas/OrdersSchemas");

const OrdersModel=new mongoose.model("order",OrdersSchemas);

module.exports={OrdersModel};