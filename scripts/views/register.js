import regiones from "../components/regionesChile.js";
import error from "../components/error.js";
import { urlAPI } from "../variables.js";

document.addEventListener('DOMContentLoaded', ()=> {

    let gender = '';

    const selectRegiones = document.getElementById('region');
    const selectComuna = document.getElementById('comuna');

    selectRegiones.addEventListener('click', (event)=> {
        if(selectRegiones.childElementCount < 2){
            regiones.regions.forEach((region) => {
                const option = document.createElement('option');
                option.value = region.name;
                option.innerHTML = region.name;
                selectRegiones.insertAdjacentElement('beforeend', (option));
            })
        }
    })

    selectComuna.addEventListener('click', () => {
        const Region = regiones.regions.find(obj => obj.name == selectRegiones.value);

        if(Region){
            selectComuna.innerHTML = ``

            Region.communes.forEach((comuna)=> {
                const option = document.createElement('option');
                option.value = comuna.name;
                option.innerHTML= comuna.name;
                selectComuna.insertAdjacentElement('beforeend', option);
            })
        }
    })


    document.getElementById('male').addEventListener('click', () => {
        if(document.getElementById('female').checked){
            document.getElementById('female').checked = false;
            document.getElementById('male').checked = true;
        }   
        if(document.getElementById('other').checked){
            document.getElementById('other').checked = false;
            document.getElementById('male').checked = true;
        }   
    
        else{
            document.getElementById('male').checked = true;
        }
    
        gender = 'male';
    })
    
    document.getElementById('female').addEventListener('click', () => {
        if(document.getElementById('male').checked){
            document.getElementById('male').checked = false;
            document.getElementById('female').checked = true;
        }   
        if(document.getElementById('other').checked){
            document.getElementById('other').checked = false;
            document.getElementById('female').checked = true;
        }   
    
        else{
            document.getElementById('female').checked = true;
        }
        gender = 'female'
    })
    
    document.getElementById('other').addEventListener('click', () => {
        if(document.getElementById('male').checked){
            document.getElementById('male').checked = false;
            document.getElementById('other').checked = true;
        }   
        if(document.getElementById('female').checked){
            document.getElementById('female').checked = false;
            document.getElementById('other').checked = true;
        }   
    
        else{
            document.getElementById('other  ').checked = true;
        }
        gender = 'other';
    })
    
    
    document.getElementById('reset').addEventListener('click', () => {
        document.getElementById('name').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('address').value = '';
        document.getElementById('zipcode').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('password2').value = '';
    })
    
    document.getElementById('submit').addEventListener('click', async () => {

        const url = `${urlAPI}/register`;

        const metaForm = {
            name: document.getElementById('name').value,
            lastname: document.getElementById('lastname').value,
            address: document.getElementById('address').value,
            zipcode: document.getElementById('zipcode').value,
            email: document.getElementById('email').value,
            gender: gender,
            password: document.getElementById('password').value,
            password2: document.getElementById('password2').value
        }
;

        const respuesta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(metaForm)
        })

        const resultado = await respuesta.json();
        
        if(resultado.error){
            error(resultado.error, document.getElementById('contenedor-registro'))
        }

        if(resultado.succesful){
            window.location.href = '/catalogo.html'
        }
        
    })





})

