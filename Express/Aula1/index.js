const { log } = require('console');
const express = require('express');
const app = express();
const port = 3000 //variável ambiente

const path = require("path");
const basepath = path.join(__dirname);

//ler o body
app.use(
    express.urlencoded({  // converter para formato URL
        extended: true, // copiar parâmetros dos objetos filhos

    }),
)

app.use(express.json())

const checkAuth = function (req, res, next) { //autentificação de usuário
    req.authStatus = true;
    if (req.authStatus) {
        console.log("Usuário logado");
    } else {
        console.log("SUS!")
    }
};

app.use(checkAuth);

app.get('users/add', (req, res) => {
    res.sendFile(`${basepath}/form.html`);
})

app.post('/users/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email

    console.log(name);
    console.log(email);
})

app.get('/users/add', (req, res) => {    //get = retorna um valor
    const add = req.params.add;  //resgatar parâmetros da URL
    console.log(`Está buscando o usuário: ${add}`); //resgatar o usuário do banco
    res.sendFile(`${basepath}/form.html`); //sendFile = transferir arquivos. basepath = especifica a pasta raiz

});

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`);

});

app.listen(port, () => {
    console.log(`App não explodiu "ainda"!\nPorta: ${port}`)
});
