var respuestaPROCE="";
var select;
var model;
var tipo;
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
    validacion : {
const rpradio=document.querySelectorAll(".radio1");
rpradio.forEach(rp=>{
    if (rp.checked){
        tipo=rp.value;
    }
});
var process=respuestaPROCE;
var presup=document.getElementById("respuestapresup").value;
var watts=document.getElementById("respuestawatts").value;

if(tipo == "" || process == "" || presup == "" || watts == ""){
    alert("Faltan datos");
    console.log(tipo);
    console.log(process);
    console.log(model)
    console.log(presup);
    console.log(watts);
    break validacion;
}
console.log("ahora a elegir")
}
}