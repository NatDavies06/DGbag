const User = require('../models/User');
const Disc = require('../models/Disc');

// function to get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findByID(req.params.id).populate('discs');
        res.json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
};

// function to get a user by id
exports.updateUserProfile = async (req, res) => {
    const { name } = req.body;
    try {
        let user = await User.findByID(req.params.id);
        user.name = name || user.name;

        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
};

// function to add a disc to a user's bag
exports.addDiscToBag = async (req, res) => {
    const { name, brand, speed, glide, turn, fade } = req.body;
    try {
        const user = await User.findByID(req.params.id);
        // all the disc info
        const newDisc = new Disc({
            name,
            brand,
            speed,
            glide,
            turn,
            fade,
        });
        // save the disc to the database
        await newDisc.save();
        user.discs.push(newDisc);
        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
};

// function to remove a disc from a user's bag
exports.removeDiscFromBag = async (req, res) => {
    const { discId } = req.params;
    try {
        let user = await User.findByID(req.params.id);
        user.bag = user.bag.filter(disc => disc._id !== discId);

        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
};