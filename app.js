const express = require('express');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const gameRoutes = require('./routes/game');
const meRoutes = require('./routes/me');

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);

app.use('/users', userRoutes);

app.use('/game', gameRoutes);

app.use('/me', meRoutes);

app.use((req, res, next) => {
	res.status(404).json({ message: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ message: 'Error del servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
