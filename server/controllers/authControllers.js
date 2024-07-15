const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// singup authinication
const singup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({
            name,
            email,
            password,
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
    }
    // error handling
    catch (error) {
        res.status(500).json({ error: error.message });
    }
    const payload = {
        user: {
            id: user.id,
        },
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 });
};

// login authinication
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'user not found' });
        }
        // check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        return res.status(400).json({ msg: 'incorrect password' });

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 });

        res.json({ token });
    }  catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }}; 