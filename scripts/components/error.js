function error(message, place){
    const contendor = document.createElement('div');
    contendor.id = "mensajeError"
    contendor.classList.add('p-4', 'text-white', 'bg-danger', 'text-center', 'rounded');
    contendor.innerText = message;

    place.insertAdjacentElement('afterbegin', contendor);

    setTimeout(()=>{
        contendor.remove();
    }, 10000)
}


export default error;