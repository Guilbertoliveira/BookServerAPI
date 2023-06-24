const {
  getAllBooks,
  getBookId,
  insertBook,
  patchBookID,
  deleteBookID,
} = require('../services/services');

function getBooks(req, res) {
  try {
    const books = getAllBooks(); //nesse caso vai apenas pegar os dados existente no json
    res.send(books);
  } catch (error) {
    //retornando erro 500 caso não ache o get
    res.status(500);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id; //pegando parametro enviado pelo usuario
    const book = getBookId(id); //nesse caso vai apenas pegar os dados existente no json
    res.send(book);
  } catch (error) {
    //retornando erro 500 caso não ache o get
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body; //pegando informação enviada pelo frontend
    insertBook(newBook);
    res.status(201); //criaçaõ sucesso
    res.send('Livro inserido com sucesso');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;
    patchBookID(body, id);
    res.send('item modificado com sucesso');
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;
    deleteBookID(id);
    res.send('livro deletado com sucesso');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
};
