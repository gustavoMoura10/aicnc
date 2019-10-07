const router = require('express').Router();
const spotController = require('../controllers/spotController')
const multer = require('multer');
const uploadConfig = require('../../config/uploadConfig');
const upload = multer(uploadConfig)

router.post('/:id', upload.single('thumbnail'), spotController.store)
router.post('/:tech', spotController.index)

module.exports = router;