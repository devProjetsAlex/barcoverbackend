const express = require('express')
const { check } = require('express-validator')
const usersController = require('../controllers/users-controller')
const router = express.Router()

// retourne un utilisateur par ID
router.get('/:uid', usersController.getUserById)
//route pour trouvé les utilisateurs par soirée
router.get('/Nights/:nid', usersController.getUserByNightId)
router.post('/', usersController.createUser)


router.get('/', usersController.getUsers)
router.post('/signup',
[
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min:6}),
    check('phone').isLength({min:10}) 
    ],usersController.signup
)
router.post('/login', usersController.login)

module.exports = router