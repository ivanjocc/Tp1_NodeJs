const express = require('express');
const router = express.Router();
const game = require('../controllers/game');
const authentication = require('../middlewares/auth');

// aumentar puntaje
router.put('/wins', authentication, game.incrementScore);

// disminuir puntaje
router.put('/lost', authentication, game.decrementScore);

module.exports = router;
