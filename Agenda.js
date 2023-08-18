const nombre = document.querySelector(".nombre")
const numero = document.querySelector(".numero")
const direccion = document.querySelector(".direccion")
const botonAgregarContacto = document.getElementById("boton-agregar")
const contactos = document.querySelector("contactos")

//almacenamiento de datos en venttana. aunque hgas refresh
const dataBase = window.localStorage


botonAgregarContacto.addEventListener("click", function(){
    let contacto = {
        nombre: nombre.value,
        numero: numero.value, 
        direccion: direccion.value

    }
})