const mongoose = require("mongoose");

const Luanvanmodel = mongoose.Schema(
    {
        nienkhoa: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Nienkhoamodel'
        },
        chuyenmuc: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chuyenmucmodel'
        },
        khoa: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Khoamodel'
        },
        tenluanvan: {
            type: String,

        },
        nguoithuchien: {
            type: String,
        },
        tomtat: {
            type: String
        },
        file: {
            type: Object,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Luanvanmodel", Luanvanmodel);