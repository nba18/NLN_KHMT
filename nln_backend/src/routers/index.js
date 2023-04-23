
const adminRouter = require("./adminRouter")
const userRouter = require("./user.router")

function router(app){
    app.use("/admin",adminRouter)
    app.use("/",userRouter)
}
module.exports = router