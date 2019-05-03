const User = require('../models/User');

module.exports = {

    async updateStatus(req, res) {

        const user = await User.findById(req.params.id);

        const status = user.statusUser;

        if (status === false) {
            user.set({
                statusUser: true
            });
        } else if (status === true) {
            user.set({
                statusUser: false
            })
        }

        await user.save();

        return res.json(user);
    },

}