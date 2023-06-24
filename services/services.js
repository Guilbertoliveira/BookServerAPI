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

function patchBookID(modifications, id) {
  let booksCurrent = JSON.parse(fs.readFileSync('books.json'));
  const indiceModification = booksCurrent.findIndex((book) => book.id === id);

  //comparative
  const contentNew = { ...booksCurrent[indiceModification], ...modifications };
  //booksCurrent[indiceModification] = {id: "2", nome: "livro irado"}
  //modifications = {nome: "nomealeatorio"}
  booksCurrent[indiceModification] = contentNew;
  fs.writeFileSync('books.json', JSON.stringify(booksCurrent));
}

function deleteBookID(id) {
  let books = JSON.parse(fs.readFileSync('books.json'));
  books = books.filter((book) => book.id !== id);
  fs.writeFileSync('books.json', JSON.stringify([...books]));
}

module.exports = {
  getAllBooks,
  getBookId,
  insertBook,
  patchBookID,
  deleteBookID,
};
