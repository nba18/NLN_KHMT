const req = require("express/lib/request");
const mongoose = require("mongoose");

const Chuyenmucmodel = require("../models/chuyenmucModel");

const Chuyenmuccontroller = {
    themChuyenmuc: async (req, res) => {
        try {
            const chuyenmuc = await Chuyenmucmodel.findOne({ tenchuyenmuc: req.body.tenchuyenmuc })
            if (chuyenmuc) {
                res.status(200).json({ 'thatbai': 'Chuyên mục này đã tồn tại' })
            } else {
                const newChuyenmuc = Chuyenmucmodel({
                    tenchuyenmuc: req.body.tenchuyenmuc,
                })
                await newChuyenmuc.save();
                res.status(200).json({ 'thanhcong': 'Thêm thành công' })
            }
        } catch (error) {
            res.status(403).json(error)
        }
    },
    layChuyenmuc: async (req, res) => {
        try {
            const chuyenmuc = await Chuyenmucmodel.find()
            if (chuyenmuc) {
                res.status(200).json(chuyenmuc)
            } else {
                res.status(200).json({ 'thatbai': 'Rỗng' })
            }
        } catch (error) {
            res.status(403).json(error)
        }
    },

}

module.exports = Chuyenmuccontroller