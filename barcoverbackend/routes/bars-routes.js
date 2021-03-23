const express = require('express');
const router = express.Router()
const barController = require('../controllers/bars-controllers');
// route pour trouvée un bar par ID
router.get('/:bid', barController.getBarById)

// route pour trouvée un bar par NOM 

router.get('/Bar/:bid', barController.getBarByNameId)

// route pour trouver un bar par capacité
router.get('/Capacity/:bid', barController.getBarByCapacityId)

// créer un bar

router.post('/', barController.createBar)

router.patch('/:bid', barController.updateBar)

router.delete('/:bid', barController.deleteBar)


module.exports = router