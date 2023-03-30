const mongoose = require("mongoose");

const Khoamodel = mongoose.Schema(
    {
       tenkhoa: {
           type: String,
           require: true,
       },
       documentList:[{
            type: String,
       }]
    },
    {timestamps: true}
)

module.exports = mongoose.model("Khoamodel", Khoamodel);