const express = require('express');
const app = express()
const path = require('path');



// setup static and middleware
// note:-- app.use() is for setting up the middleware 
app.use(express.static('./public'))
app.get('/', (req, res) => {

    // note:--- in this case we can also use path.join()
    // res.sendFile(path.join(__dirname, './navbar-app/index.html'));
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));

});


app.all('*', (req, res) => {
    res.status(404).send("resource not found");
})
app.listen(5000, () => {
    console.log("server is listening on port 5000.....");
})