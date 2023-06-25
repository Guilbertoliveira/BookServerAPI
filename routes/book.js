const { Router } = require('express');
const {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
} = require('../controllers/book');

const router = Router();

//(parameter1 (route), parameter2(request, response))
router.get('/', getBooks);

router.get('/:id', getBook);

router.post('/', postBook);

router.patch('/:id', patchBook);

router.delete('/:id', deleteBook);

//exporting to be used in other files
module.exports = router;
