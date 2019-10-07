const Spot = require('../models/Spot');

exports.show = async (req, resp) => {
    let status = 400;
    try {
        const { _id } = req.headers;
        if(!_id){
            throw 'Id Not Found'
        }
        const spots = await Spot.find({ user: id });
        status = 200;
        return resp.status(status).json(spots)
    } catch (error) {
        console.trace(error);
        return resp.status(status).send(error);
    }
}