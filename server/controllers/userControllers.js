const User = require('../models/User');
const Disc = require('../models/Disc');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findByID(req.params.id).populate('discs');
        res.json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
};

exports.updateUserProfile = async (req, res) => {
    const { name } = req.body;
    try {
        let user = await User.findByID(req.params.id);
        user.name = name || user.name;

        await user.save();