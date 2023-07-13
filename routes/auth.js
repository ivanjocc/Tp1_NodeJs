const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

// Ruta de inicio de sesión
router.post('/login', auth.login);

// Ruta de registro
router.post('/register', auth.register);

module.exports = router;
