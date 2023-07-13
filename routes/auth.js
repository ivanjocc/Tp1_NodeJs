const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

// iniciar sesion
router.post('/login', auth.login);

// registro
router.post('/register', auth.register);

module.exports = router;
