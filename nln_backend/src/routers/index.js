
const adminRouter = require("./adminRouter")

const express = require("express");

function router(app){

    app.use("/admin",adminRouter)
    // app.use("/",userRouter)
    
}
module.exports = router