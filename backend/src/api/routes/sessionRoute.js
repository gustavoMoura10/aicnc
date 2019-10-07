const router = require('express').Router();
const sessionController = require('../controllers/sessionController')

router.post('/',sessionController.store)

module.exports = router;