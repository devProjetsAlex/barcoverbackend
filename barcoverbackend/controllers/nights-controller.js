const HttpError = require('../models/http-errors')

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
        id:'p2',
        friends:'George et Phil',
        barName:'Nelligan',
        barArrival: "21:00",
        barDeparture: "23:00",
        barDate: "2021-03-13",
        creator: "u2"
    }
]

const getNightById = ( req,res,next) => {
    const nightID= req.params.nid;

    const night = DUMMY_NIGHT.find(n=> {
        return n.id === nightID
    })

    if (!night) {
        throw new HttpError('Aucune soirée Trouvée', 404)
    }
  
    res.json({night})
}

const getNightByUserId = (req,res,next)=>{
    const userId = req.params.uid;

    const night = DUMMY_NIGHT.find(n=>{
        return n.creator === userId
    });

    if (!night) {
        return next(
        new HttpError('Could no find a night for the provided user id.', 404)
        )
    }

    res.json({night})
}

const getNightByBarId =  (req,res,next)=> {
    const barId = req.params.bid;

    const night = DUMMY_NIGHT.find(n=>{
        return n.barName === barId
    })
    if (!night) {
        return next(
        new HttpError("Ce bar n'est pas enregistré dans vos soirées.", 404)
        )
    }

    res.json({night})
}

const getNightByDateId =  (req,res,next)=>{
    const dateId = req.params.did;


    const night = DUMMY_NIGHT.find(d=>{
        return d.barDate === dateId
    })
    if (!night) {
        return next(
        new HttpError("Cette date n'est pas enregistré dans vos soirées.", 404)
        )
    }
    res.json({night})
}

exports.getNightById = getNightById
exports.getNightByUserId = getNightByUserId
exports.getNightByBarId = getNightByBarId
exports.getNightByDateId = getNightByDateId