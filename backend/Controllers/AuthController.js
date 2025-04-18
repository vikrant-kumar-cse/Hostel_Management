const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");


const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, you can login', success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userModel = new UserModel({
            name,
            email,
            password: hashedPassword,
            role // ✅ this is the fix
        });

        await userModel.save();

        res.status(201).json({
            message: "Signup successfully",
            success: true
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};




const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        /*const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )*/
       // controllers/auth.js ya authController.js
       const jwtToken = jwt.sign({
        email: user.email,
        _id: user._id,
        role: user.role
    }, process.env.JWT_SECRET, { expiresIn: '1d' });
     
        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name,
                role: user.role // ✅ ADD THIS LINE!
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

module.exports = {
    signup,
    login
}