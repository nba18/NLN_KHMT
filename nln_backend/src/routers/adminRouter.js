const router = require('express').Router()

const Chuyenmuccontroller = require('../controllers/chuyenmucController')
const Khoacontroller = require('../controllers/khoaController')
const Nienkhoacontroller = require('../controllers/nienkhoaController')
const Luanvancontroller = require('../controllers/luanvanController')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'files')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})

//Nien Khoa
router.post('/nienkhoa/them', Nienkhoacontroller.themNienkhoa)
router.get('/nienkhoa/lay', Nienkhoacontroller.layNienkhoa)
router.delete('/nienkhoa/xoa', Nienkhoacontroller.xoaNienkhoa)

//Chuyen muc
router.post('/chuyenmuc/them', Chuyenmuccontroller.themChuyenmuc)
router.get('/chuyenmuc/lay', Chuyenmuccontroller.layChuyenmuc)
router.delete('/chuyenmuc/xoa', Chuyenmuccontroller.xoaChuyenmuc)
//Khoa
router.post('/khoa/them', Khoacontroller.themKhoa)
router.get('/khoa/lay', Khoacontroller.layKhoa)
router.delete('/khoa/xoa', Khoacontroller.xoaKhoa)

//Luan van
router.post('/luanvan/them', upload.single('file'),Luanvancontroller.themLuanvan)
router.get('/luanvan/lay', Luanvancontroller.layLuanvan)
router.get('/luanvan/lay1/:id', Luanvancontroller.lay1Luanvan)
router.get('/luanvan/laytheokhoa/:id', Luanvancontroller.layLuanvantheoKhoa)
router.get('/luanvan/laytheochuyenmuc/:id/:chuyenmuc', Luanvancontroller.layLuanvantheochuyenmuc)
router.get('/luanvan/laytheonam/:id/:nam', Luanvancontroller.layLuanvantheonam)
router.get('/luanvan/laytheochuyenmucnam/:id/:chuyenmuc/:nam', Luanvancontroller.layLuanvantheochuyenmucnam)
router.delete('/luanvan/xoa', Luanvancontroller.xoaLuanvan)


module.exports = router