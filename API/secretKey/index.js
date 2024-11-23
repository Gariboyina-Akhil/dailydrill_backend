//intialising express router
const Router = require("express").Router()

const secretKey = require("../../database/secretKey")

/* 
route              /
description        secretKey
access             Public
parameters         None
method             get
*/

Router.get("/", async (req,res) => {
    try {
        const keys = await secretKey.find();
        return res.json({ secretKeys: keys[0].secretKey });
    } catch (error) {
        return res.status(500).json({ error: "Server Error" });
    }
});

module.exports = Router ;