const express = require('express');
const app = express();

// or

// const express=require('express')();
app.get('/', (req, res) => {
    console.log("user hit the resource");
    res.status(200).send("Homepage");
})

app.get('/about', (req, res) => {
    console.log("user hit the about resource");
    res.status(200).send("About page");
})

app.all('*', (req, res) => {
    res.status(404).send("<h1> resource not send</h1>")
})


app.listen(5000, () => {
        console.log("server is listening on port 5000....");
    })
    // methods :
    // app.get
    // app.post
    // app.put
    // app.delete
    // app.all
    // app.use
    // app.listen