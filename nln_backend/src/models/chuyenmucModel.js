const mongoose = require("mongoose");

const Chuyenmucmodel = mongoose.Schema(
    {
       tenchuyenmuc: {
           type: String,
           require: true,
       },
       documentList:[{
            type: String,
       }]
    },
    {timestamps: true}
)

module.exports = mongoose.model("Chuyenmucmodel", Chuyenmucmodel);