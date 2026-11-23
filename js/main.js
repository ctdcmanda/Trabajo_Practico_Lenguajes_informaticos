/* formulario "Contacto" */
const formulario = document.getElementById("form")
const nombreform = document.getElementById("nombre")
const mensaje = document.getElementById("mensaje")
const tribuformulario = document.getElementById("tribu")
const ciclosvividos = document.getElementById("edad")
const visita = document.getElementById("razonVisita")
/* Importante para separar codigo y no se rompa con uno inexistente en otra pagina*/
if(formulario){
                            /* input: Al escribir*/
ciclosvividos.addEventListener("input", () => {
    if (ciclosvividos.value.length > 3) {
        ciclosvividos.value = ciclosvividos.value.slice(0, 3);
    }
});                         /* Al enviar*/
formulario.addEventListener("submit", (event)=>{
    event.preventDefault() /* Evita que recargue la pagina al hacer submit*/
    const nombre=nombreform.value.trim()
    const tribu=tribuformulario.value.trim()
    const edad=ciclosvividos.value.trim()
    const razonVisita=visita.value.trim()
    mensaje.classList.remove("d-none","alert-success","alert-danger")

    if(nombre==="" ){
        mensaje.textContent="Escribí tu nombre"
        mensaje.classList.add("alert-danger")

    } else if(tribu==="") {
        mensaje.textContent="Escribí tu tribu"
        mensaje.classList.add("alert-danger")

    }
    else if(edad === "" || edad < 1 || edad > 120) {
        
        if (edad==="")  {
            mensaje.textContent = "Escribí tus ciclos"


        } else {

        mensaje.textContent="Los carjas dicen:Nadie vive más que el sol,Coloca un ciclo correcto."
        
            }
            mensaje.classList.add("alert-danger")

    }
    else if(razonVisita===""){
        mensaje.textContent="Selecciona una opción."
        mensaje.classList.add("alert-danger")



    }
    else{
        mensaje.textContent="Gracias por elegirnos!.Que el sol respladezca tu camino."
        mensaje.classList.add("alert-success")
        formulario.reset()

    }





});}
/* Buscador Navbar*/
const Buscador = document.getElementById("formbuscador")
const items = document.getElementById("item")
/* Importante para separar codigo y no se rompa con uno inexistente en otra pagina*/
if(Buscador){

    items.addEventListener("focus", () => {
        items.placeholder = "Buscar";/* reemplaza el valor de placeholder despues de la primera interaccion*/
    })

    Buscador.addEventListener ("submit" ,(event) => {

    event.preventDefault()
    const texto = items.value.trim().toLowerCase()

    
    console.log(texto)

    if (texto === "inicio" || texto === "menu principal") {

        window.location.href = "index.html";

    } else if (texto === "lugares") {

        window.location.href = "lugares.html";

    } else if (texto === "ciudad") {

        window.location.href = "ciudad.html";

    } else if (texto === "planes") {

        window.location.href = "planes.html";

    } else if (texto === "contacto") {

        window.location.href = "contacto.html";

    } else {

       items.value = ""
       items.placeholder = "inténtalo de nuevo"

    }


});}

/* Opcion de ver más*/
const mirarMas = document.getElementById("verMas");
const botonVerMas = document.getElementById("verMasBoton");
const mensajeBotonVerMas = document.getElementById("textoBotonVerMas");

mirarMas.addEventListener("click", (event) => {
    if (botonVerMas.textContent === `Ver Mas`) {
        event.preventDefault()
        mensajeBotonVerMas.textContent = `Como vio Meridian es una gran ciudad con una
        gran cantidad de actividades y lugares para
        visitar y con una historia muy interesante`;
        botonVerMas.textContent = `Ver Menos`;
    } else if (botonVerMas.textContent === `Ver Menos`) {
        event.preventDefault()
        mensajeBotonVerMas.textContent = ``;
        botonVerMas.textContent = `Ver Mas`;
    }
    
    
})