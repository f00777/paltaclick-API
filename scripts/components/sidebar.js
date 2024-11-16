function sidebar(){
    return `
    
    <nav id="navbar" class="navbar navbar-expand-lg bg-dark d-flex d-md-none">
        <div class="container-fluid ">
        <a class="navbar-brand d-flex justify-content-center align-items-center" href="index.html">
          <img src="images/logo.png" alt="Logo PaltaClick" width="75" height="75">
          <h3 class="text-white">PaltaClick</h3>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-md-flex justify-content-between" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="admin.html">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="pedidos.html">Pedidos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="productos.html">Productos</a>
            </li>
          </ul>
          <button class="btn btn-danger">Cerras Sesión</button>
        </div>
      </div>
    </nav>
    
    
  
    <div id="sidebar" class="d-none d-md-flex flex-column flex-shrink-0 p-3 bg-dark vh-100 col-md-3">
        <a href="index.html" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img src="images/logo.png" alt="Logo PaltaClick" width="75" height="75">
            <h3 class="text-white">PaltaClick</h3>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li>
            <a href="admin.html" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="pedidos.html" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
              Pedidos
            </a>
          </li>
          <li>
            <a href="productos.html" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
              Productos
            </a>
          </li>
        </ul>
        <hr>
        <div class="dropdown">
          <button class="btn btn-danger">Cerras Sesión</button>
        </div>
    </div>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contenedor-principal').insertAdjacentHTML('afterbegin', sidebar());
    
})