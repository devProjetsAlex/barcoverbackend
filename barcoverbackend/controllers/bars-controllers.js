const HttpError = require('../models/http-errors')

let BARS = [
    {
    id: 'b1',
    name:'Sacrilege',
    email: 'Sacrilege@gmail.com',
    phone: 7789199626,
    image:"niccage",
    capacity: '50',
    creator: "admin"
   },
   {
    id: 'b2',
    name:'Nelligan',
    email: 'Nelligan@gmail.com',
    phone: 7789199626,
    image:"niccage",
    capacity: '30',
    creator: "admin"
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

const getBarByName =  (req,res,next) =>{
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

const getBarByCapacity = (req,res,next)=>{
    const barCapacity = req.params.bid   

    const bar = BARS.filter(b=>{            
        return (b.capacity === barCapacity)
    })

     if (!bar) {
        return next(
        new HttpError("Capacité du bar inconnue", 404)
        )
    }
    res.json({bar}
    )
}   
const createBar = (req,res,next) => {
    const {name,email,phone,image,capacity,creator} = req.body
    const createdBar = {
        name,
        email,
        phone,
        image,
        capacity,
        creator

    }

    BARS.push(createdBar)
    res.status(201).json({bar : createdBar})
}

const updateBar = (req,res,next) => {
    const {name, email, phone, image, capacity} = req.body
    const barId = req.params.bid

    const updatedBar = {...BARS.find(b => b.id = barId)}
    const barIndex = BARS.findIndex(b => b.id === barId)

    updatedBar.name = name
    updatedBar.email= email
    updatedBar.phone = phone
    updatedBar.image = image
    updatedBar.capacity = capacity

    BARS[barIndex] = updatedBar

    res.status(200).json({bar: updatedBar})

}

const deleteBar = (req,res,next) => {
    const barId = req.params.bid;
    BARS =BARS.filter(b => b.id !== barId)
    res.status(200).json({message: 'Bar effacé.'})
}

exports.createBar = createBar
exports.getBarByCapacity = getBarByCapacity
exports.getBarById = getBarById
exports.getBarByName = getBarByName
exports.updateBar = updateBar
exports.deleteBar = deleteBar