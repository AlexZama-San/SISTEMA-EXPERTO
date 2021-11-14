var respuestaPROCE="";
var select;
var model;
const btnRadio=document.querySelectorAll(".btn-radio1");
btnRadio.forEach(btn=>{
btn.addEventListener("change", ()=>{
if (btn.checked){
    respuestaPROCE=btn.value;
console.log(respuestaPROCE);
if (respuestaPROCE == "AMD"){
    document.getElementById("listaprocesadoresAMD").classList.remove("oculto");
    document.getElementById("listaprocesadoresINTEL").classList.add("oculto");
    select=document.getElementById("listaprocesadoresAMD");
    select.addEventListener("change", ()=>{
        select=document.getElementById("listaprocesadoresAMD");
        model=select.options[select.selectedIndex].value;
    });
}
else{
    document.getElementById("listaprocesadoresINTEL").classList.remove("oculto");
    document.getElementById("listaprocesadoresAMD").classList.add("oculto");
    select=document.getElementById("listaprocesadoresINTEL");
    select.addEventListener("change", ()=>{
        select=document.getElementById("listaprocesadoresINTEL");
        model=select.options[select.selectedIndex].value;
    });
}
}
})});
function decide(){
var tipo;
const rpradio=document.querySelectorAll(".radio1");
rpradio.forEach(rp=>{
    if (rp.checked){
        tipo=rp.value;
    }
});
console.log(tipo);
var process=respuestaPROCE;
var presup=document.getElementById("respuestapresup").value;
console.log(presup);
var watts=document.getElementById("respuestawatts").value;
console.log(watts);
}