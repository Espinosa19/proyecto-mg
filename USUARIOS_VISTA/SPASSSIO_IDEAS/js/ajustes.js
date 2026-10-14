window.onload=function(){

let nombre=localStorage.getItem("nombre");
let apellido=localStorage.getItem("apellido");
let correo=localStorage.getItem("correo");
let telefono=localStorage.getItem("telefono");
let foto=localStorage.getItem("foto");

if(nombre)document.getElementById("nombre").value=nombre;
if(apellido)document.getElementById("apellido").value=apellido;
if(correo)document.getElementById("correo").value=correo;
if(telefono)document.getElementById("telefono").value=telefono;

if(foto){
document.getElementById("preview").src=foto;
}

mostrarDatos();

}

function guardarDatos(){

let nombre=document.getElementById("nombre").value;
let apellido=document.getElementById("apellido").value;
let correo=document.getElementById("correo").value;
let telefono=document.getElementById("telefono").value;

localStorage.setItem("nombre",nombre);
localStorage.setItem("apellido",apellido);
localStorage.setItem("correo",correo);
localStorage.setItem("telefono",telefono);

let archivo=document.getElementById("foto").files[0];

if(archivo){

let reader=new FileReader();

reader.onload=function(e){

localStorage.setItem("foto",e.target.result);
document.getElementById("preview").src=e.target.result;

}

reader.readAsDataURL(archivo);

}

mostrarDatos();

}

function eliminarFoto(){

localStorage.removeItem("foto");

document.getElementById("preview").src=
"https://cdn-icons-png.flaticon.com/512/149/149071.png";

}

function mostrarDatos(){

let nombre=localStorage.getItem("nombre")||"";
let apellido=localStorage.getItem("apellido")||"";
let correo=localStorage.getItem("correo")||"";

document.getElementById("nombreCompleto").innerText=
"Nombre completo: "+nombre+" "+apellido;

document.getElementById("correoMostrado").innerText=
"Correo: "+correo;

}