const { Router } = require('express');
const {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
} = require('../controllers/book');

const router = Router();

//(parametro1 (rota), parametro2(requisição, resposta))
router.get('/', getBooks);

router.get('/:id', getBook);

router.post('/', postBook);

router.patch('/:id', patchBook);

router.delete('/:id', deleteBook);

//exportando para ser utilizado em outros arquivos
module.exports = router;
