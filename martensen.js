import { callbackify } from "util";


/* 
    Map, filter, and reduce don't depend on code outside of the callbacks, eliminating side-effects.  They also do not modify their original arrays.
*/

// MAP
// Use it when you want to translate/map all elements in an array to another set of values.

// Farenheit to celsius.

var fahrenheit = [0, 32, 45, 50, 75, 80, 85, 99, 120]

var celsius = fahrenheit.map(function (elem) {
    return Math.round((elem - 32) * 5 / 9);
})

console.log("celsius: ", celsius)

// In ES6
var es6celsius = fahrenheit.map(elem => Math.round((elem-32) * 5 / 9))

console.log("es6celsius: ", es6celsius)

// Eloquent JS vol1, written before map was added to the standart, actually builds it from scratch:

function mapFunc(func, array) {
    var result = [] // not touching the original!
    forEach(array, function (element) {
        result.push(func(element))
    })
}

console.log("mapFunc: ", mapFunc(celsius, fahrenheit))




/*
FORM: 
Array.map(function(elem, index, array) {
    ...
}, thisArg)

elem = element value
index = index in each traversal, moving left to right
array = original array invoking method
thisArg (optional) = object referred to as this in callback.
*/



