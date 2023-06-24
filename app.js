const express = require('express'); //importando função require
const routeBook = require('./routes/book');
const app = express(); //criando require
app.use(express.json()) //utlizado para receber os body para o post no json
const port = 8000; //definindo porta

//direcionando o caminho e qual get deverá receber
app.use('/book', routeBook);

//deixando a aplicação escutando na porta 8000
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
