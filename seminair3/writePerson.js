// 1. Создайте файл writePerson.js
// 2. Напишите код, который создаст файл person.json в директории
// запускаемого скрипта и запишет в файл следующий объект:

const fs = require('fs');
const path = require('path');

const user = {
    name: "Ivan",
    surname: "Ivanov",
    age: "30",
    city: "Moscow"
}

fs.writeFileSync(path.join(__dirname, 'person.json'), JSON.stringify(user, null, 2));