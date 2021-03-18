const HttpError = require('../models/http-errors')

const BARS = [
    {
    id: 'b1',
    name:'Sacrilege',
    email: 'Sacrilege@gmail.com',
    phone: 7789199626,
    capacity: 50,
    creator: "u1"
   },
   {
    id: 'b2',
    name:'Nelligan',
    email: 'Nelligan@gmail.com',
    phone: 7789199626,
    capacity: '50',
    creator: "u1"
   }
];

const getBarById = ( req,res,next) => {
    const barID= req.params.bid;
    const bar = BARS.find(b=> {
        return b.id === barID
    })  
    
    if (!bar) {
        return next(
        new HttpError("ID du bar introuvable", 404)
        )
    }
    res.json({bar})
}

const getBarByNameId =  (req,res,next) =>{
    const barName = req.params.bid

    const bar = BARS.find(b=> {
        return b.name === barName
    })
    if (!bar) {
        return next(
        new HttpError("Nom de bar introuvable.", 404)
        )
    }
    
    res.json({bar})
}

const getBarByCapacityId = (req,res,next)=>{
    const barCapacity = req.params.bid
    const bar = BARS.find(b=>{
        return b.capacity === barCapacity
    })

     if (!bar) {
        return next(
        new HttpError("Capacité du bar inconnue", 404)
        )
    }
    res.json({bar}
    )
}   


exports.getBarByCapacityId = getBarByCapacityId
exports.getBarById = getBarById
exports.getBarByNameId = getBarByNameId