const express = require('express');
const router = express.Router();

const usercontroller = require('../controllers/user_controller.js');
router.get('/profile' , usercontroller.profile);
router.get('/sign-up' ,usercontroller.signup);
router.get('/sign-in' ,usercontroller.signin);

module.exports = router;