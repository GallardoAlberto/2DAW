let misNumeros = [1, 20, 3, 4, 5];
let doble = misNumeros.map(function(num) {
    return num * 2;
});

function mayoresDeCinco(num) {
    return num > 5;
}

let mayorCinco = misNumeros.filter(mayoresDeCinco);

console.log(doble);
console.log(mayorCinco);
 