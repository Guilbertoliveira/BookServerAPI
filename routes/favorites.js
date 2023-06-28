const { Router } = require('express')
const { deleteFavorite, getFavorites, postFavorite } = require('../controllers/favorites')

const router = Router()

router.get('/', getFavorites)

router.post('/:id', postFavorite)

router.delete('/:id', deleteFavorite)

module.exports = router;