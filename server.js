const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000

const mongoUrl = 'mongodb+srv://bemjo:bemjo123@cluster0.pgbdm.mongodb.net/Clouster0?retryWrites=true&w=majority'
mongoose.connect(mongoUrl, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongodb deu erro'))

app.use(express.urlencoded({ extended: false}));


app.get('/',(req, res) => {
    res.send(`<h1>Hola mundo</h1>Soy un servidor node con express, sere una API para un PetShop <hr>
	<h1> Hello world</h1>I am a node server with express, I will be an API for a PetShop <hr><br>
	<h1> Olá mundo</h1>Sou um servidor de node com express, serei uma API para um PetShop<hr>`)
});



app.listen(port, () => {
    console.log('Rodando o servidor na porta '+port)
});