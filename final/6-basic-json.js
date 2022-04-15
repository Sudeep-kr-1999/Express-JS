const express = require('express');
const app = express();
const { products } = require('./data');
app.get('/', (req, res) => {

    //     note: -- -- --res.json(): -- -- > Sends a JSON response.This method sends a response(with the correct content - type) that is 
    // the parameter converted to a JSON string using JSON.stringify().The parameter can be any JSON type,including object,array,string,
    // Boolean,number,or null,and you can also use it to convert other values to JSON.


    // res.json([{ name: 'john' }, { name: 'sudeep' }]);
    res.json(products);

})
app.listen(5000, () => {
    console.log("server is listening on port 5000.....");
})