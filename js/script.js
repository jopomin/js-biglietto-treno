const valuta = '€';
const euroPerKm = 0.21;
const sconto20 = 0.8;
const sconto40 = 0.6;

var km = prompt('Quanti km devi percorrere?');
console.log(km);

if (isNaN(km)) {
    alert('Inserisci un valore numerico');
    document.getElementById('km').innerHTML = 'inserimento non valido';
}

else {
    document.getElementById('km').innerHTML = km;
    var eta = prompt('Quanti anni hai?');
    console.log(eta);

    if (isNaN(eta)) {
        alert('Inserisci un valore numerico');
        document.getElementById('eta').innerHTML = 'inserimento non valido';
    }

    else {
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
        document.getElementById('costo').innerHTML = costo.toFixed(2)+' '+valuta;

    }
}
