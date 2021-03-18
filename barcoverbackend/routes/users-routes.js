const express = require('express')
const userController = require('../controllers/users-controller')
const router = express.Router()

// retourne un utilisateur par ID

router.get('/:uid', userController.getUserById)

//route pour trouvé les utilisateurs par soirée

router.get('/Nights/:nid', userController.getUserByNightId)

module.exports = router