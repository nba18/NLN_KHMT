
const Khoamodel = require("../models/khoaModel");

const Khoacontroller = {
    themKhoa: async (req, res) => {
        try {
            const khoa = await Khoamodel.findOne({ tenkhoa: req.body.tenkhoa })
            if (khoa) {
                res.status(200).json({ 'thatbai': 'Khoa này đã tồn tại' })
            } else {
                const newKhoa = Khoamodel({
                    tenkhoa: req.body.tenkhoa,
                })
                await newKhoa.save();
                res.status(200).json({ 'thanhcong': 'Thêm thành công' })
            }
        } catch (error) {
            res.status(403).json(error)
        }
    },
    layKhoa: async (req, res) => {
        try {
            const khoa = await Khoamodel.find()
            if (khoa) {
                res.status(200).json(khoa)
            } else {
                res.status(200).json({ 'thatbai': 'Rỗng' })
            }
        } catch (error) {
            res.status(403).json(error)
        }
    },
    xoaKhoa: async (req, res) =>{
        try {
            await Khoamodel.findByIdAndDelete(req.body.id)
            res.status(200).json({ 'thanhcong': 'Xóa thành công' })
        } catch (error) {
            res.status(403).json(error)
        }
    },

}

module.exports = Khoacontroller