const valuta = '€';
const euroPerKm = 0.21;
const sconto20 = 0.8;
const sconto40 = 0.6;

var km = prompt('Quanti km devi percorrere?');
console.log(km);
document.getElementById('km').innerHTML = km;

var eta = prompt('Quanti anni hai?');
console.log(eta);
document.getElementById('eta').innerHTML = eta;


if (eta < 18) {
    var costo = km * euroPerKm * sconto20;
    document.getElementById('sconto').innerHTML = '20%';

}

else if (eta > 64) {
    var costo = km * euroPerKm * sconto40;
    document.getElementById('sconto').innerHTML = '40%';

}

else {
    var costo = km * euroPerKm;
    document.getElementById('sconto').innerHTML = 'Nessuno sconto applicabile';

}

console.log(costo);
document.getElementById('costo').innerHTML = costo+' '+valuta;

