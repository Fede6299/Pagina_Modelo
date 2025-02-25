function startCountup(display) {
  let timer = 0, minutos, segundos;
  setInterval(function () {
    minutos = parseInt(timer / 60, 10);
    segundos = parseInt(timer % 60, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    display.textContent = minutos + ":" + segundos;

    timer++;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  // Crear y agregar el div #countup dinámicamente
  const header = document.querySelector('header');
  const countupDiv = document.createElement('div');
  countupDiv.id = 'countup';
  header.appendChild(countupDiv);

  // Iniciar el contador
  startCountup(countupDiv);

  // Cambiar el borde del botón de envío al pasar el mouse
  const submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener('mouseenter', () => {
    submitButton.style.border = '2px solid blue';
  });
  submitButton.addEventListener('mouseleave', () => {
    submitButton.style.border = '2px solid white';
  });

  // Mostrar/Ocultar imagen
  const quitarImagenButton = document.querySelector('#quitarImagen');
  const agregarImagenButton = document.querySelector('#agregarImagen');
  const imagenFigura = document.querySelector('#imagenFigura');

  quitarImagenButton.addEventListener('click', () => {
    imagenFigura.style.display = 'none';
  });

  agregarImagenButton.addEventListener('click', () => {
    imagenFigura.style.display = 'block';
  });

  // Movimiento del aside
  const aside = document.querySelector("aside");
  const toggleButton = document.getElementById("toggleAside");

  toggleButton.addEventListener("click", function () {
    aside.classList.toggle("mover");
  });
});

