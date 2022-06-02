var moment = require('moment');
const $ = require('jquery')
// Ejercicio 1
/* function fechahoy(){
    let fechaAño = new Date().getFullYear();
    let fechaMes = new Date().getMonth();
    let fechaDia = new Date().getDate();
    return [fechaAño, fechaMes, fechaDia].join('-')
    }
    console.log(fechahoy()) */

// Ejercicio 2
/* function mesC(mes){
    switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        return 31;
    default:
        return 30;
}
}

function añoBisiesto(año){
    return (año % 400== 0) ? true : (año % 100 == 0) ? false : año % 4 == 0;
}

function fechaValidar(fecha){
    let dia = parseInt((fecha[0] + fecha[1]));
    let mes = parseInt((fecha[3] + fecha[4]));
    let año = parseInt((fecha[6] + fecha[7] + fecha[8] + fecha[9]));
    return (mes <= 12 && mes >= 1) && ((mes != 2 && (mesC(mes) >= dia && dia >= 1))  
    ((!añoBisiesto(año) && dia <= 28 && dia >= 1) (anoBisiesto(año) && dia <= 29 && dia >= 1))) ? 
    console.log("Valida") : console.log("No valida")
} */

// Ejercicio 3
/* function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleaños = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleaños.getFullYear();
    var m = hoy.getMonth() - cumpleaños.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleaños.getDate())) {
        edad--;
    }
    return edad;
}
console.log(calcularEdad) */

// Ejercicio 1 Moment
    $(document).ready(function(){
    //var hoy_formato=moment().format('MMMM Do YYYY, h:mm:ss a');
    //var dia_formato=moment("2016-01-01").format('dddd');
        var nacimiento=moment("2002/11/02");
        var hoy=moment();
        var anios=hoy.diff(nacimiento,"years");
        $("#res").text(anios);
        console.log(anios)
    });


