const Spot = require('../models/Spot');
const User = require('../models/User');

exports.store = async (req, resp) => {
    let status = 400;
    try {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { id } = req.params;

        const user = await User.findById(id);
        if (!user) {
            throw 'User not Found'
        }
        const spot = await Spot.create({
            user: id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        });
        status = 200;
        return resp.status(status).json(spot)
    } catch (error) {
        console.trace(error);
        return resp.status(status).send(error);
    }
}
exports.index = async (req, resp) => {
    let status = 400;
    try {
        const { tech } = req.params;
        const spots = await Spot.find({ techs: tech });
        status = 200;
        return resp.status(status).json(spots)
    } catch (error) {
        console.trace(error);
        return resp.status(status).send(error);
    }
}