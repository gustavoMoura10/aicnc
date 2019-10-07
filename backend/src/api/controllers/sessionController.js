const User = require('../models/User');

exports.store = async (req, resp) => {
    let status = 400;
    try {
        const { email } = req.body;
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({email});
        }
        status = 200;
        return resp.status(status).json(user)
    } catch (error) {
        console.trace(error);
        return resp.status(status).send(error)
    }
}