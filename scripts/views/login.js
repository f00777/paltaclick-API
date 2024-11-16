import error from "../components/error.js";
import { urlAPI } from "../variables.js";

document.addEventListener('DOMContentLoaded', ()=> {
    const formulario = document.getElementById('formularioLogin');

    formulario.addEventListener('submit', async (e)=>{

        const url = urlAPI + `/auth/login`
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = {}

        formData.forEach((value, key) => {
            formObj[key]= value;    
        })
        
        console.log(formObj)
        
        const respuesta = await fetch(url, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formObj)
        })

        const resultado = await respuesta.json();

        if(resultado.error){
            error('Correo o contraseña incorrecto', document.getElementById('contenedor-principal') )
        }
        
        console.log(resultado)
        
    })
})