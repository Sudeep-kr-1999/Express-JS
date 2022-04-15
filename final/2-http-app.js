// console.log("Express tutorial");

const http = require('http');
const { readFileSync } = require('fs');

// get all the files 
// const homePage = readFileSync('./index.html');
const homePage = readFileSync('./navbar-app/index.html');


const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req, res) => {
    // console.log(req.method);
    // currentpage url by default is "/"
    // console.log(req.url);
    // / console.log("user hit the server");
    // res.writeHead(200, { 'content-type': 'text/plain' });

    // note:---- if the content-type is text/plain then the html below is treated as whole string and the output is : <h1>Home Page</h1>
    const url = req.url;

    // home page 
    if (url === "/") {
        res.writeHead(200, "status text for home page", { 'content-type': 'text/html' });
        // res.write("<h1>Home Page</h1>");
        res.write(homePage);
        res.end();
    }
    // styles page 
    // here need to give the exact path with extention which we give in the html href links 
    else if (url === "/styles.css") {
        res.writeHead(200, "status text for about page", { 'content-type': 'text/css' });
        res.write(homeStyles);
        res.end();


        // image logo 
        // here need to give the exact path with extention which we give in the html href links 
    } else if (url === "/logo.svg") {
        res.writeHead(200, "status text for about page", { 'content-type': 'image/svg+xml' });
        res.write(homeImage);
        res.end();

    }

    // logic (in javascript)
    // here need to give the exact path with extention which we give in the html href links 
    else if (url === "/browser-app.js") {
        res.writeHead(200, "status text for about page", { 'content-type': 'text/javascript' });
        res.write(homeLogic);
        res.end();

    }

    // about
    else if (url === "/about") {
        res.writeHead(200, "status text for about page", { 'content-type': 'text/html' });
        res.write("<h1>About Page</h1>");
        res.end();

    }
    // 404 resource not found 
    else {
        res.writeHead(404, "status text for error page", { 'content-type': 'text/html' });
        res.write("<h1>404 Error Page not found</h1>");
        res.end();

    }
});

server.listen(5000);


// response.end([data[,encoding]][,callback])
// note:------- [,....] this symbol means it is optional
// note:-- we need to include all the pic, css as well as javascript file for the proper functioning as done above