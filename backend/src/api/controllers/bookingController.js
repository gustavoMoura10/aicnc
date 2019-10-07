const Booking = require('../models/Booking');
const Spot = require('../models/Spot');
const User = require('../models/User');

exports.store = async (req, resp) => {
    let status = 400;
    try {
        const { idUser } = req.params;
        const { idSpot } = req.params;
        const { date } = req.body;

        let user = await User.findById(idUser);
        let spot = await Spot.findById(idSpot);
        if (!user) {
            throw 'User Not Found'
        }
        if (!spot) {
            throw 'Spot Not Found'
        }
        const booking = await Booking.create({
            user: idUser,
            spot: idSpot,
            date
        });

        await booking.populate('spot')
            .populate('user').execPopulate();

        status = 200;
        return resp.status(status).json(booking);
    } catch (error) {
        console.trace(error);
        return resp.status(status).send(error);
    }
}