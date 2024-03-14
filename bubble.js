document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.effect-bubble');
  const numBubbles = 150;

  // Función para crear una burbuja
  function createBubble() {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    bubble.style.width = Math.random() * 20 + 'px';
    bubble.style.height = bubble.style.width;
    bubble.style.display = 'flex';
    bubble.style.flexWrap = 'wrap';
    bubble.style.right = Math.random() * header.clientWidth + 'px'; // Ajuste al ancho del contenedor
    bubble.style.animationDuration = Math.random() * 10 + 5 + 's';
    bubble.style.opacity = Math.random();
    bubble.style.zIndex = '1';
    bubble.style.backgroundColor = 'rgba(173, 216, 230, 0.8)'; // Color cian claro

    // Captura el ancho de la pantalla
    const screenWidth = window.innerWidth;

    // Ajusta el bottom dependiendo del ancho de la pantalla

    if (screenWidth >= 794) {
      bubble.style.bottom = '-10px'; // Si la pantalla es grande, establece el bottom a -20px
    }

    if (screenWidth === 360) {
      bubble.style.bottom = '290px';
    }

    if (screenWidth === 375) {
      bubble.style.bottom = '230px'; // Si la pantalla es estrecha, establece el bottom a 180px
    }

    if (screenWidth === 414) {
      bubble.style.bottom = '430px'; // Si la pantalla es estrecha, establece el bottom a 180px
    }

    if (screenWidth === 390) {
      bubble.style.bottom = '400px'; // Si la pantalla es estrecha, establece el bottom a 180px
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
