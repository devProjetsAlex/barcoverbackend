const express = require('express')

const router = express.Router()

const DUMMY_NIGHT = [
    {
        id:'p1',
        friends:'George et Phil',
        barName:'Sacrilege',
        barArrival: "21:00",
        barDeparture: "23:00",
        barDate: "2021-03-13",
        creator: "u1"
    },
    {
        id:'p1',
        friends:'George et Phil',
        barName:'Nelligan',
        barArrival: "21:00",
        barDeparture: "23:00",
        barDate: "2021-03-13",
        creator: "u1"
    }
]

//route pour trouée une soirée par id

router.get('/:nid', ( req,res,next) => {
    const nightID= req.params.nid;

    const night = DUMMY_NIGHT.find(n=> {
        return n.id === nightID
    })

    if (!night) {
        return res.status(404).json({message: "Aucune soirée Trouvée"})
    }
  
    res.json({night})
})

// route pour trouvé une soirée par créateur

router.get('/User/:uid',(req,res,next)=>{
    const userId = req.params.uid;

    const night = DUMMY_NIGHT.find(n=>{
        return n.creator === userId
    });

    res.json({night})
})

// route pour trouver une soirée par nom de bar

router.get('/Bar/:bid', (req,res,next)=> {
    const barId = req.params.bid;

    const night = DUMMY_NIGHT.find(n=>{
        return n.barName === barId
    })

    res.json({night})
})


// route pour trouvé une soirée par date


router.get('/Date/:did', (req,res,next)=>{
    const dateId = req.params.did;


    const night = DUMMY_NIGHT.find(d=>{
        return d.barDate === dateId
    })

    res.json({night})
})




module.exports = router