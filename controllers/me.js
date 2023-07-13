const User = require('../models/user');

// ruta informacion usuario actual
const getCurrentUser = (req, res) => {
	const currentUser = req.user;

	const user = new User(currentUser.userId, 'John Doe', currentUser.email);

	res.status(200).json(user);
};

// ruta modificar informacion usuario actual
const updateCurrentUser = (req, res) => {
	const currentUser = req.user;
	const { username, email } = req.body;

	const updatedUser = new User(currentUser.userId, username, email);

	res.status(200).json(updatedUser);
};

// ruta eliminar informacion usuario actual
const deleteCurrentUser = (req, res) => {
	const currentUser = req.user;

	res.status(204).send();
};

// ruta establecer puntaje usuario actual
const resetUserScore = (req, res) => {
	const updatedScore = 0;

	res.status(200).json({ score: updatedScore });
};

module.exports = {
	getCurrentUser,
	updateCurrentUser,
	deleteCurrentUser,
	resetUserScore,
};
