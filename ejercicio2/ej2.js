var num = prompt("NUMERO");
var mini = 1;
var maxi = 99999;

function generaAleatorio(min, max) {
    return  Math.round(Math.random() * (max - min + 1) + min);
}

function decimos(numero, minimo, maximo) {
    var lista = [];
    var r = 0;
    for (var i=0 ; i<numero ; i++) {
        r = generaAleatorio(minimo, maximo);
        lista[i] = r;
    }
    return lista;
}
console.log(decimos(num, mini, maxi));
