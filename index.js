

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

// Eloquent JS vol1, written before map was added to the standard, actually builds it from scratch:

function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i])
}

function mapFunc(func, array) {
    var result = []; // not touching the original!
    console.log("array:", array)
    forEach(array, function(element) {
        result.push(func(element));
    });
    return result;
}

// Test function:
console.log(mapFunc(Math.round, [0.01, 2, 9.89, Math.PI]))

//var temp = mapFunc(celsius, fahrenheit)
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
    Filter() calls a provided callback function once for each element in an array and constructs a new array of all the values for which callback returns a value that coerced to true.  Array elements which do not pass the callback test are simply skipped and are not included in the new array.
*/

// Martensen example:
// Remove duplicate elements from an array:
var array = [10, 20, 20, 30, 10, 50, 0, 20, 19, 89, 20, 12, 50, 0]
var uniqueArray = array.filter(function(elem, index, array) {
    return array.indexOf(elem) === index
})
console.log(uniqueArray)
// [ 10, 20, 30, 50, 0, 19, 89, 12 ]

//developer.mozilla examples:
// Keep the long words!
var words = ['spray', 'limit', 'belly', 'exuberant', 'destruction', 'present']

const result = words.filter(word => word.length > 6)
console.log(result)

// Filter out small values:
function isBigEnough(value) {
    return value >= 10
}

console.log([12, 5, 8, 130, 44].filter(isBigEnough))
//[ 12, 130, 44 ]

// filter invalid enteries from JSON
var arr = [
    {id: 15},
    {id: -1},
    {id: 0},
    {id: 3},
    {id: 12.2},
    { },
    {id: null},
    {id: NaN},
    {id: 'undefined'},
    {id: 'John Smith'}
]

var invalidEntries = 0

function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj)
}

function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
        return true
    }
    invalidEntries++
    return false
}

var arrById = arr.filter(filterByID)
console.log('Filtered Array\n', arrById)
console.log('Number of Invalid Entries ', invalidEntries)
//Filtered Array
// [ { id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 } ]
//Number of Invalid Entries  6

// And, a good old search!
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/** 
 * Filter array items based on search criteria
 * (Also, I just learned you can quickly enter multi-line comments
 * by using '/**' )
 */
function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}

console.log(filterItems(fruits, 'ap'))
console.log(filterItems(fruits, 'an'))


