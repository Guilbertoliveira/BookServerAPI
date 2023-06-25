const express = require('express'); //importing require function
const routeBook = require('./routes/book');
const app = express(); //creating require
app.use(express.json()) //used to receive the body for the post in the json
const port = 8000; //defining port

//directing the path and which get should receive
app.use('/book', routeBook);

//leaving the application listening on port 8000
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
