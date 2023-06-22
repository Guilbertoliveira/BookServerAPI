const express = require("express") //importando função require
const app = express() //criando require
const port = 8000 //definindo porta

//(parametro1 (rota), parametro2(requisição, resposta))
app.get('/', (req, res) => {
    res.send("Olá mundo!")
})

//deixando a aplicação escutando na porta 8000
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})