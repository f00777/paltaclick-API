import { urlAPI } from "../variables.js"

const url = urlAPI + `/auth/dashboard`;
console.log(url)
const respuesta = await fetch(url, {
    method: "GET",
    credentials: 'include'
})
const resultado = await respuesta.json();

if(resultado.error){
    window.location.href = '/'
}
