const { Router } = require('express')
const { deleteFavorite, getFavorites, postFavorite } = require('../controllers/favorites')

const router = Router()

router.get('/', getFavorites)

router.post('/', postFavorite)

router.delete('/', deleteFavorite)

module.exports = router;