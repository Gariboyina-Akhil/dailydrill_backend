const mongoose = require("mongoose");
require("dotenv").config();

//schema

const secretKeySchema = mongoose.Schema({
    id:Number,
    secretKey: String
});

//model
const secretKey = mongoose.model("secretKey", secretKeySchema,"secretKey" );
module.exports = secretKey ;