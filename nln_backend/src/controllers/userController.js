const Usermodel = require("../models/userModel");

const Usercontroller = {
    login: async (req, res) => {
        try {
            const user = await Usermodel.findOne({ taikhoan: req.body.taikhoan })
            if (user) {
                if (req.body.matkhau == user.matkhau) {
                    res.status(200).json(user)
                }
                else {
                    res.status(200).json({ 'thatbai': 'Mật khẩu không chính xác !' })
                }
            } else {
                res.status(200).json({ 'thatbai': 'Tài khoản sai hoặc không tồn tại!' })
            }
        } catch (error) {
            res.status(403).json(error)
        }
    },
    register: async (req, res) => {
        try {
            const uniqueUser = await Usermodel.findOne({ taikhoan: req.body.taikhoan })
            if (!uniqueUser) {
                const newUser = Usermodel({
                    taikhoan: req.body.taikhoan,
                    matkhau: req.body.matkhau,
                    hoten: req.body.hoten,
                    email: req.body.email,
                })
                await newUser.save();
                res.status(200).json({ 'thanhcong': 'Tạo thành công' })
            } else {
                res.status(200).json({ 'thatbai': 'Tài khoản đã tồn tại!' })
            }

        } catch (error) {
            res.status(403).json(error)
        }
    },
    themyeuthich: async (req, res) => {
        try {
            let check = true
            const user = await Usermodel.findById({ _id: req.body.iduser })
            user.dsyeuthich.forEach(luanvan => {
                if (luanvan == req.body.idluanvan) {
                    check = false
                }
            });
            if (check) {
                await Usermodel.findByIdAndUpdate({ _id: req.body.iduser },
                    {
                        $push: {
                            dsyeuthich: req.body.idluanvan
                        }
                    });
                res.status(200).json({ 'thanhcong': 'Thêm thành công' })
            } else {
                res.status(200).json({ 'thatbai': 'Luận văn này đã có trong danh sách' })
            }

        } catch (error) {
            res.status(403).json(error)
        }
    },
    laydsyeuthich: async (req, res) => {
        try {
            const user = await Usermodel.findById(req.params.id).populate({ path: 'dsyeuthich' })
            res.status(200).json(user.dsyeuthich)

        } catch (error) {
            res.status(403).json(error)
        }
    },

}

module.exports = Usercontroller