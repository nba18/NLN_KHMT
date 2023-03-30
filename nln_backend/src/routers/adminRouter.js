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

//Chuyen muc
router.post('/chuyenmuc/them', Chuyenmuccontroller.themChuyenmuc)
router.get('/chuyenmuc/lay', Chuyenmuccontroller.layChuyenmuc)

//Khoa
router.post('/khoa/them', Khoacontroller.themKhoa)
router.get('/khoa/lay', Khoacontroller.layKhoa)

//Luan van
router.post('/luanvan/them', upload.single('file'),Luanvancontroller.themLuanvan)
router.get('/luanvan/lay', Luanvancontroller.layLuanvan)
router.get('/luanvan/lay1/:id', Luanvancontroller.lay1Luanvan)


module.exports = router