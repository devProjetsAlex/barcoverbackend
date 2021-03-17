const express = require('express')

const router = express.Router()

const BARS = [
    {
    id: 'b1',
    name:'Sacrilege',
    email: 'Sacrilege@gmail.com',
    phone: 7789199626,
    creator: "u1"
   },
   {
    id: 'b2',
    name:'Nelligan',
    email: 'Nelligan@gmail.com',
    phone: 7789199626,
    creator: "u1"
   }
];

// route pour trouvée un bar par ID
router.get('/:bid', ( req,res,next) => {
    const barID= req.params.bid;
    const bar = BARS.find(b=> {
        return b.id === barID
    })
  
    res.json({bar})
})

// route pour trouvée un bar par NOM 

router.get('/Bar/:bid', (req,res,next) =>{
    const barName = req.params.bid

    const bar = BARS.find(b=> {
        return b.name === barName
    })
    res.json({bar})
})



module.exports = router