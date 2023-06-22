function getBooks(req, res) {
    try {
        res.send("Olá mundo!")
    } catch (error) { //retornando erro 500 caso não ache o get
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks
}