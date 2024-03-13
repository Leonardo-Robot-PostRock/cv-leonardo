document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const numBubbles = 80;

  // Función para crear una burbuja
  function createBubble() {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    bubble.style.width = Math.random() * 20 + 'px';
    bubble.style.height = bubble.style.width;
    bubble.style.display = 'flex';
    bubble.style.flexWrap = 'wrap';
    bubble.style.right = Math.random() * 100 + '%';
    bubble.style.animationDuration = Math.random() * 10 + 5 + 's';
    bubble.style.opacity = Math.random();
    bubble.style.zIndex = '1';
    bubble.style.backgroundColor = 'rgba(173, 216, 230, 0.8)'; // Color cian claro

    // Captura el query de media
    const mediaQuery = window.matchMedia('(min-width: 794px)');

    // Verifica si el query coincide
    if (mediaQuery.matches) {
      bubble.style.bottom = '-20px'; // Si coincide, establece el bottom a -20px
    }

    if (mediaQuery.matches < '794px') {
      bubble.style.bottom = '180px'; // Si no coincide, establece el bottom a 180px
    }

    header.appendChild(bubble);

    // Elimina la burbuja después de la animación
    bubble.addEventListener('animationend', function () {
      bubble.remove();
    });
  }

  // Crea múltiples burbujas
  for (let i = 0; i < numBubbles; i++) {
    setTimeout(createBubble, Math.random() * 2000);
  }
});
