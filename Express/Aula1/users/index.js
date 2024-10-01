const express = require('express');
const router = express.Router();

const path = require("path");
const basepath = path.join(__dirname);

router.use(
    express.urlencoded({  // converter para formato URL
        extended: true, // copiar parâmetros dos objetos filhos

    }),
)

router.use(express.json())

const checkAuth = function (req, res, next) { //autentificação de usuário
    req.authStatus = true;
    if (req.authStatus) {
        console.log("Usuário logado");
    } else {
        console.log("SUS!")
    }
    router.use(checkAuth);
}

router.post('/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email

    console.log(name);
    console.log(email);
})

router.get('/add', (req, res) => {    //get = retorna um valor
    const add = req.params.add;  //resgatar parâmetros da URL
    console.log(`Está buscando o usuário: ${add}`); //resgatar o usuário do banco
    res.sendFile(`${basepath}/form.html`); //sendFile = transferir arquivos. basepath = especifica a pasta raiz

});

module.exports = router //exportar módulo