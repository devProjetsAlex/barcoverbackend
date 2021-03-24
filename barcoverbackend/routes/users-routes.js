const express = require('express')
const usersController = require('../controllers/users-controller')
const router = express.Router()

// retourne un utilisateur par ID
router.get('/:uid', usersController.getUserById)
//route pour trouvé les utilisateurs par soirée
router.get('/Nights/:nid', usersController.getUserByNightId)
router.post('/', usersController.createUser)

router.get('/', usersController.getUsers)
router.post('/signup',usersController.signup)
router.post('/login', usersController.login)

module.exports = router