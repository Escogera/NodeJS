require("colors");
const { calculateResultSum } = require("./index.js");
// console.log(calculateResultSum([12.1, 33.4, 24.5, 21.5], 0.9));

const result = calculateResultSum([12.1, 33.4, 24.5, 21.5], 0.9);
const txt = `Общая стоимость покупок равна ${result}`;
if (result < 50) {
    console.log(`${txt.red}`);
} else { console.log(`${txt.green}`); }