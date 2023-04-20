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
    lay1Luanvan: async (req, res) => {
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
    layLuanvan: async (req, res) => {
        try {
            const luanvan = await Luanvanmodel.find().populate({ path: 'chuyenmuc' }).populate({ path: 'nienkhoa' }).populate({ path: 'khoa' })
            if (luanvan) {
                res.status(200).json(luanvan)
            } else {
                res.status(200).json({ 'thatbai': 'Rỗng' })
            }
        } catch (error) {
            res.status(403).json(error)
        }
    },
    layLuanvantheoKhoa: async (req, res) => {
        try {
            const luanvan = await Luanvanmodel.find({ khoa: req.params.id }).populate({ path: 'chuyenmuc' }).populate({ path: 'nienkhoa' }).populate({ path: 'khoa' })
            if (luanvan) {
                res.status(200).json(luanvan)
            } else {
                res.status(200).json({ 'thatbai': 'Rỗng' })
            }
        } catch (error) {
            res.status(403).json(error)
        }
    },
    layLuanvantheochuyenmuc: async (req, res) => {
        try {
            const luanvan = await Luanvanmodel.find({ khoa: req.params.id ,chuyenmuc: req.params.chuyenmuc}).populate({ path: 'chuyenmuc' }).populate({ path: 'nienkhoa' }).populate({ path: 'khoa' })
            if (luanvan) {
                res.status(200).json(luanvan)
            } else res.status(200)

        } catch (error) {
            res.status(403).json(error)
        }
    },
    layLuanvantheonam: async (req, res) => {
        try {
            const luanvan = await Luanvanmodel.find({ khoa: req.params.id, nienkhoa: req.params.nam }).populate({ path: 'chuyenmuc' }).populate({ path: 'nienkhoa' }).populate({ path: 'khoa' })
            if (luanvan) {
                res.status(200).json(luanvan)
            } else res.status(200)
        } catch (error) {
            res.status(403).json(error)
        }
    },
    layLuanvantheochuyenmucnam: async (req, res) => {
        try {
            const luanvan = await Luanvanmodel.find({ khoa: req.params.id, chuyenmuc :  req.params.chuyenmuc, nienkhoa: req.params.nam}).populate({ path: 'chuyenmuc' }).populate({ path: 'nienkhoa' }).populate({ path: 'khoa' })
            if (luanvan) {
                res.status(200).json(luanvan)
            } else res.status(200).json()
        } catch (error) {
            res.status(403).json(error)
        }
    },
    xoaLuanvan: async (req, res) => {
        try {
            await Luanvanmodel.findByIdAndDelete(req.body.id)
            res.status(200).json({ 'thanhcong': 'Xóa thành công' })
        } catch (error) {
            res.status(403).json(error)
        }
    },

}

module.exports = Luanvancontroller