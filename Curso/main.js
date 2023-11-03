

var nombre = "izan";

var altura = 189;
/*
var concatenacion = nombre + ' ' + altura;

var datos = document.getElementById("datos")

datos.innerHTML = concatenacion

datos.innerHTML = `

    <h1>Hola</h1>
    <p>Mi nombre es ${nombre}</p>
    <p>Mido ${altura} cm</p>

`;


if(altura>= 190){

    datos.innerHTML += '<h1>Eres una persona ALTA</h1>';
}else{
    datos.innerHTML += '<h1>Eres una persona BAJITA JEJE</h1>'

}

for(var i = 2000;i <= 2020; i++){

    datos.innerHTML += "<h2>Estamos en el año: " + i;   

}
*/
function MuestraMiNombre(nombre, altura){
    misDatos = `

    <h1>Hola</h1>
    <p>Mi nombre es ${nombre}</p>
    <p>Mido ${altura} cm</p>

`;

    return misDatos;
}
function imprimir(){

    var datos = document.getElementById("datos")
    datos.innerHTML = MuestraMiNombre("izan", 189);


}

imprimir();

var nombres = ['izan', 'ender', 'luli'];

document.write("<h1>Listado de nombres</h1>");
/*for(var i = 0; i < nombres.length;i++){

    document.write(nombres[i] + '<br>');

}*/;

nombres.forEach((nombre) => {

    document.write(nombre + '<br>') ;
});