const express = require("express") //importando função require
const routeBook = require("./routes/book")
const app = express() //criando require
const port = 8000 //definindo porta

//direcionando o caminho e qual get deverá receber
app.use('/book', routeBook);

//deixando a aplicação escutando na porta 8000
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})