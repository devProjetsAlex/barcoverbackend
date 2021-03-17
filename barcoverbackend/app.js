const express = require('express')
const bodyParser = require('body-parser')


const nightsRoute = require('./routes/nights-routes')
const usersRoute = require('./routes/users-routes')
const barsRoute = require('./routes/bars-routes')
const app = express();

app.use('/api/MyNight',nightsRoute)
app.use('/api/Users', usersRoute)
app.use('/api/Bars', barsRoute)

app.listen(5000)
