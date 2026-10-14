function cerrarSesion(){
  window.location.href = "index.html";
}


function abrirBlog(){
document.getElementById("blogAlgoMas").classList.add("active");
mostrarMenuBlog();
}

function cerrarBlog(){
document.getElementById("blogAlgoMas").classList.remove("active");
ocultarMenuBlog();
}


function abrirEnterate(){
document.getElementById("blogEnterate").classList.add("active");
mostrarMenuBlog();
}

function cerrarEnterate(){
document.getElementById("blogEnterate").classList.remove("active");
ocultarMenuBlog();
}


function abrirMotivacion(){
document.getElementById("blogMotivacion").classList.add("active");
mostrarMenuBlog();
}

function cerrarMotivacion(){
document.getElementById("blogMotivacion").classList.remove("active");
ocultarMenuBlog();
}


function abrirTips(){
document.getElementById("blogTips").classList.add("active");
mostrarMenuBlog();
}

function cerrarTips(){
document.getElementById("blogTips").classList.remove("active");
ocultarMenuBlog();
}
function toggleMenuBlog(){
let menu = document.getElementById("menuOpciones");

if(menu.style.display === "flex"){
menu.style.display = "none";
}else{
menu.style.display = "flex";
}
}


function mostrarMenuBlog(){
document.querySelector(".menu-blog").style.display = "block";
}

function ocultarMenuBlog(){
document.querySelector(".menu-blog").style.display = "none";
}


function irBlog(id){


document.querySelectorAll(".blog-modal").forEach(b=>{
b.classList.remove("active");
});


document.getElementById(id).classList.add("active");

}