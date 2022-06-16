const myArray = [1, 2, 3, 5, 6, 8, 9];


function tallerSecond (arr) {
    return arr.map((element) => Math.pow(element, 2)).sort(function(a,b) {
        return a - b
    });
}


console.log(tallerSecond(myArray));