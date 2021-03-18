const express = require('express')
const router = express.Router()
const nightsControllers = require('../controllers/nights-controller')

//route pour trouée une soirée par id

router.get('/:nid', nightsControllers.getNightById)

// route pour trouvé une soirée par créateur

router.get('/User/:uid',nightsControllers.getNightByUserId)

// route pour trouver une soirée par nom de bar

router.get('/Bar/:bid',nightsControllers.getNightByBarId)

// route pour trouvé une soirée par date

router.get('/Date/:did',nightsControllers.getNightByDateId)

module.exports = router