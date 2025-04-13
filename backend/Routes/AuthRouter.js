const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');


//ye change hua hai 2 line
const auth = require('../Middlewares/Auth');
const role = require('../Middlewares/roleMiddleware'); // ✅ Fix here


const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);


// ✅ Example route - Only admin can access
router.get('/admin', auth, role('admin'), (req, res) => {
    res.send('Hello Admin ');
  });



// routes/adminRoutes.js
const User = require('../Models/User'); // ✅ REQUIRED

router.get('/users', auth, role('admin'), async (req, res) => {
  try {
    const users = await User.find({}, 'email role'); // Select only email and role
    res.json({ users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: 'Server Error' });
  }
});


router.delete('/users/:id', auth, role('admin'), async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});







  

module.exports = router;