const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://jacode:jacode32145@cursonodejs-ftetj.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
});


// app.get('/', (req, res) => {
//     return res.send('Curso NodeJS API Rest!');
// });

app.use(cors());

app.use(express.json());

app.use(require('./routes'));


app.listen(3000, () => {
    console.log('Servidor Online');
});