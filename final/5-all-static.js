const express = require('express');
const app = express();
// const path = require('path');



// setup static and middleware
// note:-- app.use() is for setting up the middleware 
app.use(express.static('./public'))
    // app.get('/', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
    //     res.end();

// adding to static assets 
// SSR (Server Side Rendering)
// });


app.all('*', (req, res) => {
    res.status(404).send("resource not found");
})
app.listen(5000, () => {
    console.log("server is listening on port 5000.....");
})