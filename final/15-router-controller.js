const express = require('express')
const app = express()

// we can do it both way with people and people1 in the route folder 
const people = require('./routes/people')
    // const people = require('./routes/people1')

const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
    // parse form data
app.use(express.urlencoded({ extended: false }))
    // parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})


// Note:--- // we can do it both way with people and people1 in the route folder