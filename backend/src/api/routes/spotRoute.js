const router = require('express').Router();
const spotController = require('../controllers/spotController')
const multer = require('multer');
const path = require('path');
const upload = multer({
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..', 'uploads'),
        filename:function(req,file,cb){
            cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
        }
    })
});

router.post('/', upload.single('thumbnail'), spotController.store)
router.post('/:tech', spotController.index)

module.exports = router;