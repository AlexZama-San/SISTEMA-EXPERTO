var tipo;
var process;
var model;
var presup;
var watts;
const botonenvia = document.getElementById("botonenvia");
botonenvia.addEventListener("click", ()=> {
    tipo = document.getElementsByName("RespuestaUSO").value;
    console.log(tipo);
});