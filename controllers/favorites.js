const {
    getAllFavorites,
    deleteFavoritesID,
    insertFavorites
} = require('../services/favorites');

function getFavorites(req, res) {
    try {
        const books = getAllFavorites(); //in this case it will just get the existing data in the json
        res.send(books);
    } catch (error) {
        //returning error 500 if the get is not found
        res.status(500);
        res.send(error.message);
    }
}

function postFavorite(req, res) {
    try {
        const id = req.params.id
        insertFavorites(id);
        res.status(201).json({ msg: `book has been inserted successfully` }); //successful creation
        // res.send('has been inserted successfully');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            deleteFavoritesID(id);
            res.send('successfully deleted book');
        } else {
            res.status(500);
            res.send(error.message);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getFavorites,
    postFavorite,
    deleteFavorite
}