

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
    //console.log(func, array)
    forEach(array, function (element) {
        result.push(func(element))
    })
    return result
}

// This works because functions can be passed to functions...although this particular implementation doesn't work :-(

//console.log("mapFunc: ", mapFunc(celsius, fahrenheit))
//mapFunc(Math.round, [0.01, 2, 9.89, Math.PI])
//console.log(j)



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

/*  FILTER
    Use it when: You want to modify elements based on a condition.
*/

// Martensen example:
// Remove duplicate elements from an array:
var uniqueArray = array.filter(function(elem, index, array) {
    return array.indexOf(elem) === index
})

//developer.mozilla example:





