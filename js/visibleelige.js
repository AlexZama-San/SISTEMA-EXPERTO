var respuestaPROCE="";
const btnRadio=document.querySelectorAll(".btn-radio1");
btnRadio.forEach(btn=>{
btn.addEventListener("change", ()=>{
if (btn.checked){
    respuestaPROCE=btn.value;
console.log(respuestaPROCE);
if (respuestaPROCE == "AMD"){
    document.getElementById("listaprocesadoresAMD").classList.remove("oculto");
    document.getElementById("listaprocesadoresINTEL").classList.add("oculto");
}
else{
    document.getElementById("listaprocesadoresINTEL").classList.remove("oculto");
    document.getElementById("listaprocesadoresAMD").classList.add("oculto");
}
}
})});