const { v4: uuidv4 } = require('uuid');
const { validationResult} = require('express-validator')

const HttpError = require('../models/http-errors')
let DUMMY_NIGHT = [
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
        barName:'Sacrilege',
        barArrival: "21:00",
        barDeparture: "23:00",
        barDate: "2021-03-13",
        creator: "u2"
    }
]

const getNightsById = ( req,res,next) => {
    const nightId= req.params.nid;

    const night = DUMMY_NIGHT.find(n=> {
        return n.id === nightId
    })

    if (!night) {
        throw new HttpError('Aucune soirée Trouvée', 404)
    }
  
    res.json({night})
}

const getNightsByCreator = (req,res,next)=>{
    const userId = req.params.uid;

    const night = DUMMY_NIGHT.filter(n=>{
        return n.creator === userId
    });

    if (!night) {
        return next(
        new HttpError('Could no find a night for the provided user id.', 404)
        )
    }

    res.json({night})
}

const getNightsByBarName =  (req,res,next)=> {
    const barId = req.params.bid;

    const night = DUMMY_NIGHT.filter(n=>{
        return n.barName === barId
    })
    if (!night) {
        return next(
        new HttpError("Ce bar n'est pas enregistré dans vos soirées.", 404)
        )
    }

    res.json({night})
}

const getNightsByDate =  (req,res,next)=>{
    const dateId = req.params.did;


    const nights = DUMMY_NIGHT.filter(d=>{
        return d.barDate === dateId
    })
    if (!nights || nights.length === 0 ) {
        return next(
        new HttpError("Cette date n'est pas enregistré dans vos soirées.", 404)
        )
    }
    res.json({night})
}

const createNight = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        throw new HttpError('Invalid inputs passed, please check the data',422)
    }
    
    const {friends ,barName, barArrival, barDeparture, barDate, creator} = req.body
    const createdNight = {
        id: uuidv4(),
        friends,
        barName,
        barArrival,
        barDeparture,
        barDate,
        creator
    }

    DUMMY_NIGHT.push(createdNight)

    res.status(201).json({night : createdNight})
}



const updateNight = (req,res,next) => {
    const {friends, barName, barArrival, barDeparture} = req.body
    const nightId = req.params.nid

    const updatedNight = {...DUMMY_NIGHT.find(n=> n.id === nightId)}
    const nightIndex = DUMMY_NIGHT.findIndex(n => n.id === nightId)

    updatedNight.friends = friends
    updatedNight.barName = barName
    updatedNight.barArrival = barArrival
    updatedNight.barDeparture = barDeparture

    DUMMY_NIGHT[nightIndex] = updatedNight

    res.status(200).json({night: updatedNight})

}

const deleteNight = (req,res,next) => {
    const nightId = req.params.nid;
    DUMMY_NIGHT = DUMMY_NIGHT.filter(n => n.id !== nightId)
    res.status(200).json({message: 'Soirée effacée.'})
}

exports.getNightsById = getNightsById
exports.getNightsByCreator = getNightsByCreator
exports.getNightsByBarName = getNightsByBarName
exports.getNightsByDate = getNightsByDate
exports.createNight = createNight

exports.updateNight = updateNight
exports.deleteNight = deleteNight