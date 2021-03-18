const express = require('express');
const barController = require('../controllers/bars-controllers');

const router = express.Router()
const HttpError = require('../models/http-errors')

// route pour trouvée un bar par ID
router.get('/:bid', barController.getBarById)

// route pour trouvée un bar par NOM 

router.get('/Bar/:bid', barController.getBarByNameId)

// route pour trouver un bar par capacité
router.get('/Capacity/:bid', barController.getBarByCapacityId)



module.exports = router