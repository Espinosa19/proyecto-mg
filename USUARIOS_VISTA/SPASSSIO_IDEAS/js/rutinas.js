window.addEventListener("load",function(){

let nombre = localStorage.getItem("nombre");

if(nombre){
document.querySelector(".nombre").innerText = nombre;
}

});

