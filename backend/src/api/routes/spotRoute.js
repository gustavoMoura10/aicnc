const router = require('express').Router();
const spotController = require('../controllers/spotController')


router.post('/', spotController.store)
router.post('/:tech', spotController.index)

module.exports = router;