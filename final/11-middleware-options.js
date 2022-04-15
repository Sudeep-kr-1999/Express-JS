const express = require('express');
const app = express();
const morgan = require('morgan');

// keeping middleware in the seprate file and importing it here to use it 
// const authorize = require('./authorize');
// const logger = require('./logger')

// 1. use v/s route
// 2. options:-- our own/express/third party

// app.use([logger, authorize]);


// it is a middleware "static" of express app used here 
// app.use(express.static('./public'));


// third party middleware 
// one of the most popular HTTP Request logger middleware is morgan and we install it using npm morgan 
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Home");
});

app.get('/about', (req, res) => {
    res.send("About");
})

app.get('/api/products', (req, res) => {
    res.send("Products");
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send("Items");
})

app.listen(5000, () => {
    console.log("Server is listening in the port 5000................!");
})


// the response from the morgan is like given below 
// GET /api/items 200 5 - 6.397 ms