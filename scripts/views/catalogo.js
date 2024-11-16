import { urlAPI } from "../variables.js";

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const url = urlAPI + `/catalogo`
        const respuesta = await fetch(url);
        const productos = await respuesta.json();
        
        console.log(productos)

        productos.forEach((product) => {
            const productCard = 
            `
        
            <div class="container py-3">
                <div class="row justify-content-center mb-3">
                <div class="col-md-12 col-xl-10">
                    <div class="card shadow-0 border rounded-3">
                    <div class="card-body">
                        <div class="row">
                        <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div class="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src="/images/${product.image}"
                                class="w-100" />
                            <a href="#!">
                                <div class="hover-overlay">
                                <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-6">
                            <h5>${product.name}</h5>
                            <div class="d-flex flex-row">
                            <div class="text-danger mb-1 me-2">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <span>${product.price}</span>
                            </div>
                            <p class="text-truncate mb-4 mb-md-0">
                            </p>
                        </div>
                        <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div class="d-flex flex-row align-items-center mb-1">
                            <h4 class="mb-1 me-1">${product.price}</h4>
                            <span class="text-danger"><s>$6000</s></span>
                            </div>
                            <h6 class="text-success">Envío gratis</h6>
                            <div class="d-flex flex-column mt-4">
                            <a href="/producto" class="btn btn-primary btn-sm" type="button">Ver producto</a>
                            
                            <a href="/cart?id={{this.id}}&quantity=1" class="btn btn-success btn-sm mt-4 anadirCarrito">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                                </svg>
                                Añadir Al carrito
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            `

            const contenedor = document.getElementById('contenedor-catalogo');
            contenedor.insertAdjacentHTML('beforeend', productCard);
    
        })
    }catch(e){
        console.log(e)
    }
})