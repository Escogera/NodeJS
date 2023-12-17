"use strict";

const http = require("http");
let homeCounter = 0;
let aboutCounter = 0;
let notFoundCounter = 0;


const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            homeCounter++;
            res.writeHead(200, {
                "Content-Type": "text/html; charset=UTF-8",
            });
            res.end(`<h1>Главная страница</h1><a href = "/about">About page</a><p>Количество переходов на страницу: ${homeCounter}</p>`);
            break;
        case "/about":
            aboutCounter++;
            res.writeHead(200, {
                "Content-Type": "text/html; charset=UTF-8",
            });
            res.end(`<h1>About</h1><a href = "/">Main page</a><p>Количество переходов на страницу: ${aboutCounter}</p>`);
            break;
        default:
            notFoundCounter++;
            res.writeHead(404, {
                "Content-Type": "text/html; charset=UTF-8",
            });
            res.end(`<h1>404 Page not found</h1><a href = "/">Main page</a><p>Количество переходов на страницу: ${notFoundCounter}</p>`);
            break;
    }
});

const port = 3000;
server.listen(port);