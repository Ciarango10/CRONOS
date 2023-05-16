/*
6am-11am - Buenos dias
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo
*/

let horaDia = 23;
let mensaje;

if( horaDia >= 6 && horaDia <= 11 ){
    mensaje = "Buenos días";
}
else if( horaDia >= 12 && horaDia <= 18 ){
    mensaje = "Buenas tardes";
}
else if( horaDia >= 19 && horaDia <= 24){
    mensaje = "Buenas noches";
}
else if( horaDia >= 0 && horaDia < 6){
    mensaje = "Durmiendo";
}
else{
    mensaje = "Valor incorrecto";
}

console.log(mensaje);