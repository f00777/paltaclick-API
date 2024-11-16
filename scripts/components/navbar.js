function navbarInicio(){
    const navbar = `
                    <nav id="navbar" class="navbar navbar-expand-lg bg-body-transparent">
                    <div class="container-fluid">

                        <a class="navbar-brand d-flex justify-content-center align-items-center" href="index.html">
                        <img src="images/logo.png" alt="Logo PaltaClick" width="75" height="75">
                        <h3 class="text-white">PaltaClick</h3>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-white" href="catalogo.html">Catálogo</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-white" href="nosotros.html">Nosotros</a>
                            </li>
                        </ul>
                
                        <div class="carrito p-4 d-flex flex-column flex-xl-row justify-content-center align-items-center">
                            <a class="text-white p-2 m-0 rounded justify-content-center align-items-center cursor-pointer btn btn-danger mt-3 mt-md-0" href="admin.html">
                            Admin
                            </a>
                            <a class="text-white p-2 m-0 rounded justify-content-center align-items-center cursor-pointer btn btn-warning ms-md-5 mt-3 mt-md-0" href="login.html">
                            Login
                            </a>
                            
                            <a class="ms-md-5 mt-3 mt-md-0" href="historial.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-clock-history" viewBox="0 0 16 16">
                                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
                                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                            </a>
                            <a class="ms-md-5 mt-3 mt-md-0" href="cart.html">
                            <svg class="carrito" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                            </a>
                
                
                            <div class="wallet mt-3 mt-md-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-wallet-fill ms-md-5 cursor-pointer" viewBox="0 0 16 16">
                                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"/>
                            </svg>
                            <div class="dropdown-content">
                                <div class="bg-body-amarillo w-100">
                                <p class="text-center text-white fw-bold mt-2">Dinero en Wallet:</p>
                                </div>
                                <p class="fs-5 fw-bold mt-5">$0</p>
                                <a class="btn btn-primary my-4">Agregar Fondos</a>
                            </div>
                            </div>
                
                        </div>
                
                        </div>
                    </div>
                    </nav>
    
    `
    return navbar;
}

function navbar(){
    const navbar = `
    
                <nav id="navbar" class="navbar navbar-expand-lg bg-body-verde">
                <div class="container-fluid">

                    <a class="navbar-brand d-flex justify-content-center align-items-center" href="index.html">
                    <img src="images/logo.png" alt="Logo PaltaClick" width="75" height="75">
                    <h3 class="text-white">PaltaClick</h3>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="catalogo.html">Catálogo</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="nosotros.html">Nosotros</a>
                        </li>
                    </ul>
            
                    <div class="carrito p-4 d-flex flex-column flex-xl-row justify-content-center align-items-center">
                        <a class="text-white p-2 m-0 rounded justify-content-center align-items-center cursor-pointer btn btn-danger mt-3 mt-md-0" href="admin.html">
                        Admin
                        </a>
                        <a class="text-white p-2 m-0 rounded justify-content-center align-items-center cursor-pointer btn btn-warning ms-md-5 mt-3 mt-md-0" href="login.html">
                        Login
                        </a>
                        
                        <a class="ms-md-5 mt-3 mt-md-0" href="historial.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-clock-history" viewBox="0 0 16 16">
                            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
                            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
                            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        </a>
                        <a class="ms-md-5 mt-3 mt-md-0" href="cart.html">
                        <svg class="carrito" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        </a>
            
            
                        <div class="wallet mt-3 mt-md-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-wallet-fill ms-md-5 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"/>
                            <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"/>
                        </svg>
                        <div class="dropdown-content">
                            <div class="bg-body-amarillo w-100">
                            <p class="text-center text-white fw-bold mt-2">Dinero en Wallet:</p>
                            </div>
                            <p class="fs-5 fw-bold mt-5">$0</p>
                            <a class="btn btn-primary my-4">Agregar Fondos</a>
                        </div>
                        </div>
            
                    </div>
            
                    </div>
                </div>
                </nav>
    
    `

    return navbar;
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('headerInicio')){
        document.getElementById('headerInicio').insertAdjacentHTML('afterbegin', navbarInicio());
    }
    else{
        document.body.insertAdjacentHTML('afterbegin', navbar());
    }
    
});