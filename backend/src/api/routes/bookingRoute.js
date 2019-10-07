const router = require('express').Router();
const bookingController = require('../controllers/bookingController')

router.post('/:idUser/:idSpot',bookingController.store)

module.exports = router;