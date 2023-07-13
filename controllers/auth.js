const jwt = require('jsonwebtoken');

const User = require('../models/user');

// inicio sesion
const login = (req, res) => {
	const { email, password } = req.body;

	// usuario ya creado
	const user = new User('1', 'John Doe', email, password);

	// generacion de token
	const token = jwt.sign({ userId: user.id, email: user.email }, 'secreto-token', { expiresIn: '1h' }); // Reemplaza 'secreto-token' con tu propia clave secreta

	res.status(200).json({ token });
};

// registro
const register = (req, res) => {
	const {id, username, email, password } = req.body;

	// registro exitoso
	const user = new User(id++, username, email, password);

	// generar token
	const token = jwt.sign({ userId: user.id, email: user.email }, 'secreto-token', { expiresIn: '1h' }); // Reemplaza 'secreto-token' con tu propia clave secreta

	res.status(201).json({ token });
};

module.exports = {
	login,
	register,
};
