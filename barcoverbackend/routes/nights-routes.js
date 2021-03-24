const express = require('express')
const {check} = require('express-validator')
const router = express.Router()
const nightsControllers = require('../controllers/nights-controller')

//route pour trouée une soirée par id
router.get('/:nid', nightsControllers.getNightsById)
// route pour trouvé une soirée par créateur
router.get('/User/:uid',nightsControllers.getNightsByCreator)
// route pour trouver une soirée par nom de bar
router.get('/Bar/:bid',nightsControllers.getNightsByBarName)
// route pour trouvé une soirée par date
router.get('/Date/:did',nightsControllers.getNightsByDate)
// route pour créer une soirée
router.post('/',
[check('barName').not().isEmpty(),
check('barArrival').not().isEmpty(),
check('barDeparture').not().isEmpty()    
], nightsControllers.createNight)
// route pour modifié soiré
router.patch('/:nid', nightsControllers.updateNight)

router.delete('/:nid', nightsControllers.deleteNight)

module.exports = router