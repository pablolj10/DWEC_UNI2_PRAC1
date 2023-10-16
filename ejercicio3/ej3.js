var lista = [" / ", "Alaves", "A. Madrid", "Villareal", "Barcelona", "R. Madrid", "Getafe", "Almeria", "Sevilla", "Valencia", "Betis", "Celta", "A. Bilbao", "R. Sociedad", "R. Vallecano", "Osasuna", "Mallorca", "Cadiz", "Granada", "Las Palmas", "Girona"];

function generarQ(lis) {
    qv = new Array();
    for(var i=0 ; i<21 ; i++) {
        qv[i] = new Array();
    }
    for(var j=0; j<21; j++) {
        for(var k=0; k<21; k++) {
            if(j==0) {
                qv[j][k] = lis[k];
            }
            if(k==0) {
                qv[j][k] = lis[j];
            }
        }
    }
    return qv;
}

// console.table(generarQ(lista));

function quiniela(q) {
    for(var i=1 ; i<21 ; i++) {
        for(var j=1 ; j<21 ; j++) {
           q[i][j] = Math.round(Math.random() * 2);
           if(q[i][j] == 0) {
            q[i][j] = "X";
           }
           if(i == j) {
            q[i][j] = "_";
           }
        }
    }
    return q;
}
console.table(quiniela(generarQ(lista)));