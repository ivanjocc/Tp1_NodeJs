const User = require('../models/user');

// Nota requiere autenticacion (token)

// ruta obtener lista usuarios
const getUsers = (req, res) => {
	const users = [
		new User('1', 'John Doe', 'john@example.com', 'password1'),
		new User('2', 'Jane Smith', 'jane@example.com', 'password2'),
	];

	// encontrar usuarios menos admin
	const filteredUsers = users.filter((user) => !user.isAdmin);

	res.status(200).json(filteredUsers);
};

// ruta modificar un usuario
const updateUser = (req, res) => {
	const { id } = req.params;
	const { username, email } = req.body;

	const updatedUser = new User(id, username, email);

	res.status(200).json(updatedUser);
};

// ruta borrar un usuario
const deleteUser = (req, res) => {
	const { id } = req.params;

	res.status(204).send();
};

module.exports = {
	getUsers,
	updateUser,
	deleteUser,
};
