const express = require('express');

const {check} = require('express-validator')

const barController = require('../controllers/bars-controllers');

const router = express.Router()


// route pour trouvée un bar par ID
router.get('/:bid', barController.getBarById)

// route pour trouvée un bar par NOM 

router.get('/Bar/:bid', barController.getBarByName)

// route pour trouver un bar par capacité


router.get('/', barController.getCapacity)

router.get('/Capacity/:bid', barController.getBarByCapacity)

// créer un bar

router.post(
    '/',
    [check('name').not().isEmpty(),
    check('email').not().isEmpty(),
    check('phone').not().isEmpty()    
],
barController.createBar)

router.patch('/:bid', barController.updateBar)

router.delete('/:bid', barController.deleteBar)


module.exports = router