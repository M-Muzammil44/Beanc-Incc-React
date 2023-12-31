require('dotenv').config()

const express = require('express')
const formsRoutes = require('./routes/forms')
const mongoose = require('mongoose')

// express app
const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/forms',formsRoutes) //first parameter can be anything including '/'

/*env file is created backend root. if you have download this project from github you won't see ".env" beacuse "." files aren't
upload to github by default. example of .env is at bottom

connect to db*/
mongoose.connect(process.env.MONG_URL, {
    serverSelectionTimeoutMS: 30000, // Timeout in milliseconds
})
    .then(() => {
        // Database connection successful, now listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Database is listing on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    })



    /* .env 
    PORT = xxxx
    MONG_URL = connection string
    */

