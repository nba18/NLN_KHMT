const req = require("express/lib/request");
const mongoose = require("mongoose");

const Nienkhoamodel = require("../models/nienkhoaModel");

const Nienkhoacontroller = {
    themNienkhoa: async (req, res) => {
        try {
            const nienkhoa = await Nienkhoamodel.findOne({ nam: req.body.nam })
            if (nienkhoa) {
                if (nienkhoa.hocky != req.body.hocky) {
                    const newNienkhoa = Nienkhoamodel({
                        nam: req.body.nam,
                        hocky: req.body.hocky,
                    })
                    await newNienkhoa.save();
                    res.status(200).json({ 'thanhcong': 'Thêm thành công' })
                }
                else {
                    res.status(200).json({ 'thatbai': 'Niên khóa này đã tồn tại' })
                }
            } else {
                const newNienkhoa = Nienkhoamodel({
                    nam: req.body.nam,
                    hocky: req.body.hocky,
                })
                await newNienkhoa.save();
                res.status(200).json({ 'thanhcong': 'Thêm thành công' })
            }
        } catch (error) {
            res.status(403).json(error)
        }
    },
    layNienkhoa: async (req, res) => {
        try {
            const nienkhoa = await Nienkhoamodel.find()
            if (nienkhoa) {
                nienkhoa.sort((a, b) => b.nam - a.nam)
                res.status(200).json(nienkhoa)
            } else {
                res.status(200).json({ 'thatbai': 'Rỗng' })
            }
        } catch (error) {
            res.status(403).json(error)
        }
    },
    xoaNienkhoa: async (req, res) =>{
        try {
            await Nienkhoamodel.findByIdAndDelete(req.body.id)
            res.status(200).json({ 'thanhcong': 'Xóa thành công' })
        } catch (error) {
            res.status(403).json(error)
        }
    },
}

module.exports = Nienkhoacontroller