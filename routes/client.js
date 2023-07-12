const { Router } = require('express');

const { postClient, getClients, postLogin } = require('../controllers/client');

const router = Router();

router.post('/register', postClient);

router.post('/login', postLogin);

router.get('/all', getClients);

module.exports = router;
