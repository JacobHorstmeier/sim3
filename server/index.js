require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , ctrl = require('./controller')
    , massive = require('massive')
    , session = require('express-session')
    // , cors = require('cors')
    // , checkUserSession = require ('./../src/middleware/checkUserSession.js')


    
    const {
        SERVER_PORT,
        CONNECTION_STRING,
        SESSION_SECRET,
        
    } = process.env;
    
    const app = express();

    massive(CONNECTION_STRING).then( db => {
        app.set('db', db)
    })

    // app.use(bodyParser.json())
    // app.use(cors())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

// app.use(checkUserSession)

    app.post('/api/auth/register', ctrl.registerUser)
    app.post('/api/auth/login', ctrl.loginUser)


app.listen(SERVER_PORT, () => {
    console.log(`Making Minutes Feel Like Full Days On: `, SERVER_PORT)
})