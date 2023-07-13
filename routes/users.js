const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const authentication = require('../middlewares/auth');

// info usuarios
router.get('/', authentication, user.getUsers);

// actualizar usuario
router.put('/:id', authentication, user.updateUser);

// borrar usuario
router.delete('/:id', authentication, user.deleteUser);

module.exports = router;
