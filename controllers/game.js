// ruta incrementar puntaje
const incrementScore = (req, res) => {
	const updatedScore = 100;

	res.status(200).json({ score: updatedScore });
};

// ruta disminuir puntaje
const decrementScore = (req, res) => {
	const updatedScore = 50;

	res.status(200).json({ score: updatedScore });
};

module.exports = {
	incrementScore,
	decrementScore,
};
