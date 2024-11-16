import { urlAPI } from "../variables.js"

document.addEventListener('DOMContentLoaded', async ()=>{
    const url = urlAPI + `/auth/dashboard`;
    console.log(url)
    const respuesta = await fetch(url, {
        method: "GET",
        credentials: 'include'
    })
    const resultado = await respuesta.json();
    console.log(resultado)
})