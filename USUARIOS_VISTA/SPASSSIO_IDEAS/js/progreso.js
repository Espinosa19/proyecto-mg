function mostrarTab(event,tab){

document.getElementById("graficas").classList.add("hidden");
document.getElementById("notas").classList.add("hidden");

document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));

document.getElementById(tab).classList.remove("hidden");

event.target.classList.add("active");

}

function cambiarPeriodo(boton){

let botones = document.querySelectorAll(".periods button");

botones.forEach(b => b.classList.remove("active"));

boton.classList.add("active");

}

window.addEventListener("load",function(){

let nombre=localStorage.getItem("nombre");
let apellido=localStorage.getItem("apellido");
let correo=localStorage.getItem("correo");
let foto=localStorage.getItem("foto");

if(nombre){
document.querySelector(".empty").innerText =
nombre + " " + apellido;
}

if(correo){
document.querySelectorAll(".empty")[1].innerText =
correo;
}

if(foto){
document.querySelector(".profile img").src = foto;
}

});