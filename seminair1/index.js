"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, {
                "Content-Type": "text/html; charset=UTF-8",
            });
            res.end('<h1>Главная страница</h1><a href = "/about">About page</a>');
            break;
        case "/about":
            res.writeHead(200, {
                "Content-Type": "text/html; charset=UTF-8",
            });
            res.end('<h1>About</h1><a href = "/">Main page</a>');
            break;
        default:
            break;
    }
});

const port = 3000;
server.listen(port);