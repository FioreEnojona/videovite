// Seleccionamos el formulario y el contenedor de testimonios
const form = document.getElementById('formTestimonio');
const testimoniosContainer = document.querySelector('.testimonios');

// Función que se ejecuta cuando el formulario es enviado
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenimos el comportamiento por defecto (recargar la página)

    // Obtenemos los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const cargo = document.getElementById('cargo').value;
    const mensaje = document.getElementById('mensaje').value;

    // Creamos un nuevo contenedor para el testimonio
    const nuevoTestimonio = document.createElement('div');
    nuevoTestimonio.classList.add('testimonio');

    // Añadimos el contenido al nuevo testimonio
    nuevoTestimonio.innerHTML = `
        <p class="mensaje">"${mensaje}"</p>
        <p class="nombre">${nombre}</p>
        <p class="cargo">${cargo}</p>
    `;

    // Añadimos el nuevo testimonio al contenedor principal
    testimoniosContainer.appendChild(nuevoTestimonio);

    // Limpiamos el formulario
    form.reset();
});
