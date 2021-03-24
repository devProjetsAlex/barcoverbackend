const { v4: uuidv4 } = require('uuid');
const { validationResult} = require('express-validator')
const HttpError = require('../models/http-errors')

const USERS = [
    {
    id: 'u1',
    name:'Alex Cote',
    email: 'alex@gmail.com',
    phone:'418-686-1139',
    password: '3'
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
    const {name ,email, phone } = req.body
    const createdUser = {
        id:uuidv4(),
        name,
        email,
        phone       
    }

    USERS.push(createdUser)

    res.status(201).json({user : createdUser})
}



const getUsers = (req,res,next) => {
    res.json({users: USERS})
}

const signup = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        throw new HttpError('Invalid inputs passed, please check the data',422)
    }
    
    const { name, email, phone, password} = req.body
    const hasUser = USERS.find(u => u.email === email );
    if (hasUser) {
        throw new HttpError('Email already register',422)
    }


    const createdUser = {
        id: uuidv4(),
        name,
        email,
        password,
        phone
    }

    USERS.push(createdUser)

    res.status(201).json({user: createdUser})
}

const login = (req,res,next) => {
    const {email, password} = req.body;

    const identifiedUser = USERS.find(u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
        throw new HttpError('Could not identifu user, crendentials seem to be wrong.',401)

    }
    res.json({message: 'Logged In!'})
}

exports.login = login
exports.signup = signup
exports.getUsers = getUsers
exports.createUser = createUser
exports.getUserById = getUserById
exports.getUserByNightId = getUserByNightId