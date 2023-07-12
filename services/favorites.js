const fs = require('fs');
const { getAllBooks } = require('./books');

function getAllFavorites() {
  return JSON.parse(fs.readFileSync('favorites.json'));
}

function deleteFavoritesID(id) {
  let books = JSON.parse(fs.readFileSync('favorites.json'));
  books = books.filter((book) => book.id !== id);
  fs.writeFileSync('favorites.json', JSON.stringify([...books]));
}

function insertFavorites(id) {
  const books = getAllBooks();
  const favorites = JSON.parse(fs.readFileSync('favorites.json'));
  const insertBook = books.find((book) => book.id === id);
  const newListFavorite = [...favorites, insertBook];
  fs.writeFileSync('favorites.json', JSON.stringify(newListFavorite));
}

module.exports = {
  getAllFavorites,
  deleteFavoritesID,
  insertFavorites,
};
