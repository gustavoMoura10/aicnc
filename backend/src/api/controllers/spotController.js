const Spot = require('../models/Spot');
const User = require('../models/User');
const fs = require('fs');
const path = require('path');


exports.store = async (req, resp) => {
    let status = 400;
    try {
        const { company, techs, price, thumbnail } = req.body;
        const { _id } = req.headers;
        let filename = `default.jpg`
        if(thumbnail.type && thumbnail.data){
            const file = `${new Date().getTime()}.${thumbnail.type.split('/')[1]}`;
            const pathFind = path.resolve(__dirname,'..','..','uploads',`${file}`);
            fs.writeFileSync(
                pathFind,
                thumbnail.data,
                'base64'
            )
            filename = file;
        }
        const user = await User.findById(_id);
        if (!user) {
            throw 'User not Found'
        }
        const spot = await Spot.create({
            user: _id,
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