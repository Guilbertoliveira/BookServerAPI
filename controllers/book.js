const {
  getAllBooks,
  getBookId,
  insertBook,
  patchBookID,
  deleteBookID,
} = require('../services/services');

function getBooks(req, res) {
  try {
    const books = getAllBooks(); //in this case it will just get the existing data in the json
    res.send(books);
  } catch (error) {
    //returning error 500 if the get is not found
    res.status(500);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id; //getting parameter sent by the user
    if (id && Number(id)) {
      const book = getBookId(id); //in this case it will just get the existing data in the json
      if (book === undefined) {
        res.status(422).json("id not found");
      }
      res.send(book);
    } else {
      res.status(400); //user inconsistent data error
      res.send('id inválido');
    }
  } catch (error) {
    //returning error 500 if the get is not found
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body; //getting information sent by the front end
    if (req.body.name && newBook.name.length > 3) {
      insertBook(newBook);
      res
        .status(201)
        .json({ msg: `Livro ${newBook.name} has been inserted successfully` }); //successful creation
      // res.send('has been inserted successfully');
    } else {
      const retorno =
        newBook.name == null
          ? `The submitted book does not contain the property 'name'.`
          : `The book ${newBook.name} sent has the value less than 3 characters.`;
      res.status(422).json({ msg: retorno });
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number()) {
      const body = req.body;
      patchBookID(body, id);
      res.send('successfully modified object');
      res.status(200);
    } else {
      res.status(422); //user inconsistent data error
      res.send('invalid id');
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deleteBookID(id);
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
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
};
