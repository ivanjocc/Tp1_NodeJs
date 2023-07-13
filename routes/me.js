const express = require('express');
const router = express.Router();
const me = require('../controllers/me');
const authentication = require('../middlewares/auth');

// info usuario actual
router.get('/', authentication, me.getCurrentUser);

// actualizar usuario actual
router.put('/', authentication, me.updateCurrentUser);

// borrar usuario actual
router.delete('/', authentication, me.deleteCurrentUser);

// reiniciar puntaje
router.put('/reset-score', authentication, me.resetUserScore);

module.exports = router;
