
const nada = document.getElementById("negrita")
const titulo = document.getElementById("titulos")

function añadirTexto(){

    nada.innerText += "nada"
}

const titulos = ["Publicidad ","Internet en España ","Historia ","Percepciones "]

function lista(){
    titulos.forEach((titulos) =>{

    titulo.innerHTML +='<li>' + titulos + '</li>'
})}