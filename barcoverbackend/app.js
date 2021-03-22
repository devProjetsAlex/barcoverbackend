const express = require('express')
const bodyParser = require('body-parser')


const nightsRoute = require('./routes/nights-routes')
const usersRoute = require('./routes/users-routes')
const barsRoute = require('./routes/bars-routes')
const HttpError = require('./models/http-errors')

const app = express();

app.use(bodyParser.json())

app.use('/api/Nights', nightsRoute)
app.use('/api/Users', usersRoute)
app.use('/api/Bars', barsRoute)


app.use((req,res,next)=>{
    const error = new HttpError('Route introuvable',404);
    throw error
})

app.use((error,req,res,next) => {
    if (res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500)
    res.json({message : error.message || "Une erreur inconnue est arrivé."})
})

app.listen(5000)
