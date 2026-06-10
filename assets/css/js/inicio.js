document.getElementById('irARecuperar').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Buscar si existe un correo guardado en la memoria del navegador
    const correoGuardado = localStorage.getItem('ultimoCorreo');
    
    if (correoGuardado) {
        // Lo escribe automáticamente en el input de tu formulario de Bootstrap
        document.getElementById('recuperarEmail').value = correoGuardado;
    }

    // Intercambio de pantallas de Bootstrap
    document.getElementById('vistaLogin').classAdd('d-none');
    document.getElementById('vistaRecuperar').classList.remove('d-none');
});
