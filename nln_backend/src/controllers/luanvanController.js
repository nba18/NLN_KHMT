const req = require("express/lib/request");
const mongoose = require("mongoose");

const Luanvanmodel = require("../models/luanvanModel");



const Luanvancontroller = {
    themLuanvan: async (req, res) => {
        try {
            // const luanvan = await luanvanModel.findOne({ tenkhoa: req.body.tenkhoa })
            const newLuanvan = Luanvanmodel({
                khoa: req.body.khoa,
                chuyenmuc: req.body.chuyenmuc,
                nienkhoa: req.body.nienkhoa,
                tenluanvan: req.body.tenluanvan,
                tomtat: req.body.tomtat,
                nguoithuchien: req.body.nguoithuchien,
                file: req.file
            })
            await newLuanvan.save();
            res.status(200).json({ 'thanhcong': 'Thêm thành công' })
        } catch (error) {
            res.status(403).json(error)
        }
    },
    layLuanvan: async (req, res) => {
        try {
            const luanvan = await Luanvanmodel.find()
            if (luanvan) {
                res.status(200).json(luanvan)
            } else {
                res.status(200).json({ 'thatbai': 'Rỗng' })
            }
        } catch (error) {
            res.status(403).json(error)
        }
    },
    lay1Luanvan: async (req, res) => {
        console.log("1luanvan",req.body.id)
        try {
            const luanvan = await Luanvanmodel.findById(req.params.id).populate({ path: 'chuyenmuc' }).populate({ path: 'nienkhoa' }).populate({ path: 'khoa' })
            if (luanvan) {
                res.status(200).json(luanvan)
            } else {
                res.status(200).json({ 'thatbai': 'Rỗng' })
            }
        } catch (error) {
            res.status(403).json(error)
        }
    },

}

module.exports = Luanvancontroller