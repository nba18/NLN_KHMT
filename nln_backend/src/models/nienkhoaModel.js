const mongoose = require("mongoose");

const Nienkhoamodel = mongoose.Schema(
    {
        nam: {
            type: Number,
            require: true,
        },
        hocky: {
            type: String,
            require: true,
        },
        documentList: [{
            type: String,
        }]
    },
    { timestamps: true }
)

module.exports = mongoose.model("Nienkhoamodel", Nienkhoamodel);