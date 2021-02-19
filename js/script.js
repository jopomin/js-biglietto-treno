const euroPerKm = 0.21;
const sconto20 = 0.8;
const sconto40 = 0.6;

var km = prompt('Quanti km devi percorrere?');
console.log(km);

var eta = prompt('Quanti anni hai?');
console.log(eta);

if (eta < 18) {
    var costo = km * euroPerKm * sconto20;
}

else if (eta > 64) {
    var costo = km * euroPerKm * sconto40;
}

else {
    var costo = km * euroPerKm;
}

console.log(costo);