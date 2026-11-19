const formulario = document.getElementById("form")
const nombreform = document.getElementById("nombre")
const mensaje = document.getElementById("mensaje")
const tribuformulario = document.getElementById("tribu")
const ciclosvividos = document.getElementById("edad")
const visita = document.getElementById("razonVisita")



ciclosvividos.addEventListener("input", () => {
    if (ciclosvividos.value.length > 3) {
        ciclosvividos.value = ciclosvividos.value.slice(0, 3);
    }
});
formulario.addEventListener("submit", (event)=>{
    event.preventDefault()
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
    else if(edad < 1 || edad > 120) {
        mensaje.textContent="Los carjas dicen:Nadie vive más que el sol,coloca un ciclo correcto."
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





});