const { Router } = require("express")
const { getBooks } = require("../controllers/book")

const router = Router()

//(parametro1 (rota), parametro2(requisição, resposta))
router.get('/', getBooks)

router.post('/', (req, res) => {
    res.send('Você fez uma requisição do tipo POST')
})

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo Patch')
})

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo Delete')
})

//exportando para ser utilizado em outros arquivos
module.exports = router
