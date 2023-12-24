"use strict";
// Файл names.js содержит массивы имен и фамилий
const names = require("./names");

// Функция для генерации случайного имени и фамилии
function generatePeople() {
    // Получаем случайное имя из массива имен
    let randomFirstName = names.firstNames[Math.floor(Math.random() * names.firstNames.length)];
    // Получаем случайную фамилию из массива фамилий
    let randomLastName = names.lastNames[Math.floor(Math.random() * names.lastNames.length)];

    // Возвращаем сгенерированное имя и фамилию
    return console.log(randomFirstName, randomLastName);
}

// Экспортируем функцию generatePeople
module.exports = { generatePeople }