const express = require('express');
const app = express();
const { products } = require('./data');
app.get('/', (req, res) => {

    //     note: -- -- --res.json(): -- -- > Sends a JSON response.This method sends a response(with the correct content - type) that is 
    // the parameter converted to a JSON string using JSON.stringify().The parameter can be any JSON type,including object,array,string,
    // Boolean,number,or null,and you can also use it to convert other values to JSON.


    // res.json([{ name: 'john' }, { name: 'sudeep' }]);
    // res.json(products);
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })


    // res.json(products)
    res.json(newProducts);
})


// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => {
//         return (product.id === 1)
//     })


//     // res.json(products)
//     res.json(singleProduct);
// })

// -------------- route parameter in express (here : productID is the route parameter) 
app.get('/api/products/:productID', (req, res) => {
    // console.log(req);

    // req.params:-- is to access that parameters above( here productID) 
    // console.log(req.params)

    const { productID } = req.params;

    const singleProduct = products.find((product) => {

            // note:---  route parameter is the string value which we write or provide in the url and then it is saved on req.params and 
            //   then we compare it with the json object attribute to show the result as per the parameter 

            // here as we enter the productID =1 In the url then we compare the product.id = productID (should be number by default it is string)
            // and if it matches then we are showing the data correspondingly

            return (product.id === Number(productID))
        })
        // =====================================================================================================================================

    // note:---  route parameter is the string value which we write or provide in the url and then it is saved on req.params and 
    //   then we compare it with the json object attribute to show the result as per the parameter 


    //     const singleProduct = products.find((product) => {
    //         return (product.id === 1)
    //     })
    // =====================================================================================================================================

    if (!singleProduct) {
        return res.status(404).send("Product Does not Exist");
    }
    console.log(singleProduct)
        // res.json(products)
    res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    // saare route parameter req.params Object mein aa jaate hai 
    // console.log output // { productID: '1', reviewID: 'abc' }
    res.send("hello world");
})

app.listen(5000, () => {
    console.log("server is listening on port 5000.....");
})