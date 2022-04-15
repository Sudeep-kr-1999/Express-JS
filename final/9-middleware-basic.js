const express = require('express');
const app = express();
//req => middleware => res



// here logger is a mddleware which kept between the endpoint and the callback function and in logger we need "req" so from where do we get?
// the ans is express implicitly pass the parameters for us as below  



// note:---- middle ware mein kuch bhi ho jaaye next parameter paas krna hota h . agar hum next ko use mein nhi lege to server middleware se 
// baahar nhi aa paayega bina koi res send kiye huye means agar hume middle ware se baahr aana hai to ya hum res ko usi middleware mein send 
// kr de alag se aur nhi to next() call kr de ..... either of the cases hume next parameter include krna hota h 
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send("Testing");

    next();

}


app.get('/', logger, (req, res) => {
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method, url, time);
    res.send("Home");
});


app.get('/about', logger, (req, res) => {
    res.send("About");
})

app.listen(5000, () => {
    console.log("Server is listening in the port 5000................!");
})