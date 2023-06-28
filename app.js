const express = require('express'); //importing require function
const routeBook = require('./routes/book');
const routeFavorite = require('./routes/favorites')

const cors = require('cors');  //releasing server to receive requests

const app = express(); //creating require
app.use(express.json()) //used to receive the body for the post in the json
app.use(cors({ origin: "*" })) //releasing server to receive requests

const port = 8000; //defining port

//directing the path and which get should receive
app.use('/book', routeBook);
app.use('/favorites', routeFavorite);

//leaving the application listening on port 8000
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
