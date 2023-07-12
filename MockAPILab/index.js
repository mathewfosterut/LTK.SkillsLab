const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 3000;
const isLocal = true;
const apiRouter = require('./routes/ltk/index')


app.use(express.urlencoded())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/ltkapi');
mongoose.connection.once('open', () => {
	console.log('Connected to database')
})


app.use('/api', apiRouter)

app.get('/', (req, res) => {
    res.json({
		message: "✨ 👋🌏 ✨",
		stage: process.env.NODE_ENV,
	});
});

app.get("/ping", (req, res) => {
	res.json({
		message: "🏓",
	});
});

//Catch-all error handler
app.use('*', (req, res) => {
	res.status(500).send('Something broke')
})

//Global error handler
app.use((err, req, res, next) => {
	const defaultErr = {
		log: 'Express error handler caught unknown middleware error',
		status: 500,
		message: {err: 'An error occured'}
	}
	const error = Object.assign({}, defaultErr, err)
	return res.status(500).json(error.message)
})

if (isLocal) {
	//local host
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	});
} else {
	//for lambda export
	module.exports = app;
}
