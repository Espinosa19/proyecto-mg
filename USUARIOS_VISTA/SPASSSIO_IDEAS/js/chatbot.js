let abierto = false;

function toggleChat(){
    let box = document.getElementById("chat-box");

    if(!abierto){
        box.style.display = "flex";  
        iniciarChat();
        abierto = true;
    }else{
        box.style.display = "none";
        abierto = false;
    }
}


function escribirBot(texto){
    let typing = document.getElementById("typing");
    typing.style.display = "block";

    setTimeout(()=>{
        typing.style.display = "none";

        let chat = document.getElementById("chat-content");
        let div = document.createElement("div");
        div.className = "bot";
        div.innerHTML = texto;
        chat.appendChild(div);

        chat.scrollTop = chat.scrollHeight;
    }, 1000);
}


function escribirUser(texto){
    let chat = document.getElementById("chat-content");
    let div = document.createElement("div");
    div.className = "user";
    div.innerHTML = texto;
    chat.appendChild(div);
}


function iniciarChat(){

    document.getElementById("chat-content").innerHTML = "";
    document.getElementById("chat-options").innerHTML = "";

    escribirBot("👋 ¡Hola! Bienvenido a SPASSSIO. ¿En qué puedo ayudarte hoy?");

    setTimeout(()=>{
        document.getElementById("chat-options").innerHTML = `
        <button onclick="acerca()">ℹ️ Acerca de Spasssio</button>
        <button onclick="precios()">💲 Inscripción y Precios/pagos</button>
        <button onclick="soporte()">🛠️ Soporte / Tutoriales</button>
        <button onclick="test()">📊 Autoevaluación personal</button>
        `;
    }, 1200);
}


function acerca(){
    escribirUser("Acerca de Spasssio");
    escribirBot("¿Qué te gustaría saber sobre Spasssio?");
}

function precios(){
    escribirUser("Precios");
    escribirBot("¿Quieres inscribirte o ver precios?");
}

function soporte(){
    escribirUser("Soporte");
    escribirBot("Cuéntame tu problema");
}

function test(){
    escribirUser("Autoevaluación");
    escribirBot("¿Quieres evaluar IMC o ICC?");
}

function enviar(e){
    if(e.key === "Enter"){
        let input = document.getElementById("chat-input");

        escribirUser(input.value);
        escribirBot("Procesando... 🤖");

        input.value = "";
    }
}