const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
	// obtener token de la solicitud
	const authorizationHeader = req.headers.authorization;
	if (!authorizationHeader) {
		return res.status(401).json({ message: 'no has ingresado un token valido' });
	}

	try {
		// validar token
		const token = authorizationHeader.split(' ')[1];
		const decodedToken = jwt.verify(token, 'secreto-token');

		// agregar token decodificado
		req.user = decodedToken;

		next();
	} catch (error) {
		return res.status(401).json({ message: 'token no valido' });
	}
};

module.exports = authentication;
