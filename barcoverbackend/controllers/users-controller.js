const HttpError = require('../models/http-errors')
const USERS = [
    {
    id: 'u1',
    name:'Alex Cote',
    email: 'alex@gmail.com',
    phone:'418-686-1139',
    nights: '3'
   }
];

const getUserById = ( req,res,next) => {
    const userID= req.params.uid;
    const user = USERS.find(u=> {
        return u.id === userID
    })

    if (!user) {
        return next(
        new HttpError('Aucune utilisateur trouvé Trouvée', 404)
        )
    }
  
    res.json({user})
}

const getUserByNightId = (req,res,next) => {
    const nightsId = req.params.nid;

    const user = USERS.find(u=>{
        return u.nights === nightsId
    })
    if (!user) {
        return next(
        new HttpError('Soirée non trouvée', 404)
        )
    }

    res.json({user})
}

const createUser = (req,res,next) => {
    const {id,name ,email, phone, bars } = req.body
    const createdUser = {
        id,
        name,
        email,
        phone,
        bars       
    }

    USERS.push(createdUser)

    res.status(201).json({user : createdUser})
}



exports.createUser = createUser
exports.getUserById = getUserById
exports.getUserByNightId = getUserByNightId