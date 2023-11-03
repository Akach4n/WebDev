var datos = document.getElementById("datos")

function primero(){
    datos.innerHTML += `

    <h1>Hola</h1>

`+ "<br>";
//Cambia esta línea, junto con la línea 2(5 del otro main.js)
datos.innerText += '<h1>hola</h1>';
}
function segundo(){

datos.innerText += '<h1>hola</h1>';

datos.innerHTML += `

    <h1>Hola</h1>

`+ "<br>";
}

primero();
datos.innerHTML += `
<br><br><br><br>
`;
segundo();