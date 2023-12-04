$(document).ready(function(){

    $('nav').html(`
        <ul>
            <li><a href="index.html" class="index"><i class="fas fa-home"></i> Inicio</a></li>
            <li><a href="deporte.html" class="deporte"><i class="fa-solid fa-futbol"></i> Deportes</a></li>
            <li><a href="espectaculo.html" class="espectaculo"><i class="fa-solid fa-star"></i> Espectáculos</a></li>
            <li><a href="cultura.html" class="cultura"><i class="fa-solid fa-palette"></i> Cultura</a></li>
            <li><a href="entrevista.html" class="entrevista"><i class="fa-solid fa-microphone"></i> Entrevistas</a></li>
        </ul>
    `);

    let paginaActual = document.location.href.match(/[^\/]+$/)[0];
    $('nav ul li a').removeClass('active');

    switch (paginaActual) {
        case 'index.html':
            $('nav ul li a.index').addClass('active');
        break;
        case 'deporte.html':
            $('nav ul li a.deporte').addClass('active');
        break;
        case 'espectaculo.html':
            $('nav ul li a.espectaculo').addClass('active');
        break;
        case 'cultura.html':
            $('nav ul li a.cultura').addClass('active');
        break;
        case 'entrevista.html':
            $('nav ul li a.entrevista').addClass('active');
        break;
    }
});