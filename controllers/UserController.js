const User = require('../models/User');

module.exports = {

    async consult(req, res) {
        const users = await User.find({}).sort('dateCreate');

        return res.json(users);
    },

    async insert(req, res) {
        const users = await User.create(req.body);

        return res.json(users);
    },

    async delete (req, res){        
        const user = await User.findById(req.params.id);

        const thisUser = await User.deleteOne(user);

        return res.json(thisUser);
    }

};
