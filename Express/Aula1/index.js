const express = require('express');
const app = express();
const port = 3000 //variável ambiente

const path = require("path");
const basepath = path.join(__dirname, 'Aula1')
const checkAuth = function(req, res, next){
    req.authStatus = true;
    if(req.authStatus){
        console.log("Usuário logado");
    } else {
        console.log("SUS!")
    }
};

app.use(checkAuth);

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`);

})

app.listen(port, () => {
    console.log(`App não explodiu "ainda"!\nPorta: ${port}`) 
})
