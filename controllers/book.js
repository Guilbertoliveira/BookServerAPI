const fs = require('fs');

function getBooks(req, res) {
  try {
    const books = JSON.parse(fs.readFileSync('books.json')); //nesse caso vai apenas pegar os dados existente no json
    res.send(books);
  } catch (error) {
    //retornando erro 500 caso não ache o get
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks,
};
