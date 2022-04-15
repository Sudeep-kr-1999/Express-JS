const express = require('express');
const app = express();

// keeping middleware in the seprate file and importing it here to use it 
const authorize = require('./authorize');
const logger = require('./logger')
    //req => middleware => res

// instead of passing middle ware to all the route manually we use app.use() which is used to use the middleware in the entire app 
// note:-- order matters here so all the middleware function must be on the top of the document so every route will access it 



// here we can also use the path as the argument:--- path paas krne se jo bhi endpoint is path se start hoga usme ye middleware use ho jaayega 
// aur '/api' ke baad ka route log kr dega 


// exmple: -- - http: //localhost:5000/api/products given output as GET /products 2021
app.use('/api', logger)


// for using multiple middleware function in app we simply placed them in the array
// here also order matter jo middleware pehle hai wo pehle hoga baad wla baad mein hoga 
app.use([logger, authorize]);


app.get('/', (req, res) => {
    res.send("Home");
});

app.get('/about', (req, res) => {
    res.send("About");
})

app.get('/api/products', (req, res) => {
    res.send("Products");
})


// inline insertion of multiple middleware 
app.get('/api/items', [logger, authorize], (req, res) => {
    console.log(req.user)
    res.send("Items");
})

app.listen(5000, () => {
    console.log("Server is listening in the port 5000................!");
})