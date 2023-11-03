/*Este es un javascript con dos tipos de inner bien hecho, para diferenciarlo 
ver main2.js y index2.html*/    

var datos = document.getElementById("datos")
var datos2 = document.getElementById("datos2")
datos.innerHTML += `

    <h1>Hola</h1>

`+ "<br>";
//Cambia esta línea, junto con la línea 5
datos2.innerText += '<h1>hola</h1>';


