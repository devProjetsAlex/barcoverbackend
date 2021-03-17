const express = require('express')

const router = express.Router()

const USERS = [
    {
    id: 'u1',
    name:'Alex Cote',
    email: 'alex@gmail.com',
    phone:'418-686-1139',
    nights: '3'
   }
];


// retourne un utilisateur par ID

router.get('/:uid', ( req,res,next) => {
    const userID= req.params.uid;
    const user = USERS.find(u=> {
        return u.id === userID
    })
  
    res.json({user})
})

//route pour trouvé les utilisateurs par soirée

router.get('/Nights/:nid', (req,res,next) => {
    const nightsId = req.params.nid;

    const user = USERS.find(u=>{
        return u.nights === nightsId
    })

    res.json({user})
})

module.exports = router