require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose");

//express connection
const book_application = express();
book_application.use(express.json());

// Microservices Routes
const secretKey = require("./API/secretKey");

//mongoose connection
mongoose.set('strictQuery', true);
const dbName = "dailydrill";  // Replace with your desired database name

mongoose.connect(process.env.MONGO_URL, { dbName: dbName, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Successfully connected to the database: ${dbName}`);
  })
  .catch((err) => {
    console.error('Error connecting to the database', err);
});


//initializing microservices
book_application.use("/secretKey",secretKey);

book_application.listen(3000, () => console.log("book_application server is running"));