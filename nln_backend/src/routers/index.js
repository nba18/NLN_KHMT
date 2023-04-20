
const adminRouter = require("./adminRouter")
const userRouter = require("./user.router")
const express = require("express");

function router(app){

    app.use("/admin",adminRouter)
    app.use("/",userRouter)
    
}
module.exports = router