const fs = require('fs');

function getAllBooks() {
  return JSON.parse(fs.readFileSync('books.json'));
}

function getBookId(id) {
  //com parametros na url
  const books = JSON.parse(fs.readFileSync('books.json'));
  return books.filter((book) => book.id === id)[0];
}

function insertBook(newBook) {
  const books = getAllBooks();
  fs.writeFileSync('books.json', JSON.stringify([...books, newBook]));
}

function patchBookID(id, update) {
  const book = getBookId(id)
  const books = getAllBooks()
  const itemUpdate = { ...book, nome: update.nome }

  if (book) {

    books.forEach((bookArray) => {
      if (bookArray.id === itemUpdate.id) {
        bookArray.nome = itemUpdate.nome;
      }
    });

    fs.writeFileSync('books.json', JSON.stringify(books));
  }
  else {
    console.log('livro não encontrado')
  }
}

module.exports = {
  getAllBooks,
  getBookId,
  insertBook,
  patchBookID
};
