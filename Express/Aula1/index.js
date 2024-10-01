// const { log } = require('console');
const express = require('express');
const app = express();
const port = 3000 //variável ambiente

const path = require("path");
const users = require('./users');

const basepath = path.join(__dirname);

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`);

});

app.listen(port, () => {
    console.log(`App não explodiu "ainda"!\nPorta: ${port}`)
});
