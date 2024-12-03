let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}// Declaramos una función con el nombre exacto "formEuroToDollar"


const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Declaramos una función con el nombre exacto "formEuroToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar / 1.07 * 156.5;
    // Retornamos el valor en yens
    return valueInYen;
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a yens
    let valueInPound = valueInYen / 156.5 * 0.87;
    // Retornamos el valor en libras esterlinas
    return valueInPound;
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};