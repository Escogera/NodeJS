"use strict";
const numberPrecision = require("number-precision");


function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((sum, cur) => numberPrecision.plus(sum, cur), 0);
    return numberPrecision.times(total, discount);
}
// console.log(`Общая стоимость покупок: ${calculateResultSum([12.1, 33.4, 24.5, 21.5], 0.9)}`);

module.exports = { calculateResultSum }