const mongoose = require("mongoose");

const Usermodel = mongoose.Schema(
    {
        taikhoan: {
            type: String,
            required: true,
            unique: true,
        },
        matkhau: {
            type: String,
            required: true,
        }, 
        hoten: {
            type: String,
        },
        email: {
            type: String,
        },
        phanloai: {
            type: Number,
            default: '1',
        },
        dsyeuthich : [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Luanvanmodel'
        }]
        
    },
    {timestamps: true}
);
module.exports = mongoose.model("Usermodel",Usermodel);
