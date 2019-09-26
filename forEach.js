// Working some thing out with forEach:

function mapFunc(func, myArray) {
    var result = []; // not touching the original!
    console.log("array:", myArray)
    forEach(array, function(element) {
        result.push(func(element));
    });
    // myArray.forEach(function(element) {
    //     result.push(func(element))
    //     console.log(element);
    // })
    return result;
}

console.log(mapFunc(Math.round), [0.01, 2, 9.89, Math.PI]);
