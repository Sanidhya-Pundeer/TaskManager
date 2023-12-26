const express = require('express');
const { loginController, registerController, logoutUser } = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/register', registerController);
userRoute.post('/login', loginController);

module.exports = userRoute;