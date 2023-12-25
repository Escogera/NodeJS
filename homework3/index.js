const express = require("express");
const path = require("path");
const fs = require("fs");
const pathToData = path.join(__dirname, "countNumbers.json");

const app = express();

app.get("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync(pathToData, "utf-8"));
    data.home++;
    fs.writeFileSync(pathToData, JSON.stringify(data, null, 2));
    res.send(`<h1>Главная страница</h1>
  <div>Количество просмотров: ${data.home}</div>
  <a href="/about">О проекте</a>`);
});

app.get("/about", (req, res) => {
    const data = JSON.parse(fs.readFileSync(pathToData, "utf-8"));
    data.about++;
    fs.writeFileSync(pathToData, JSON.stringify(data, null, 2));
    res.send(`<h1>О проекте</h1>
  <div>Количество просмотров: ${data.about}</div>
  <a href="/">Главная страница</a>`);
});

const port = 3000;

app.listen(3000);