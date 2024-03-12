// Función para crear una onda
function createWave(className, size, top) {
  const wave = document.createElement('div');
  wave.classList.add('wave');
  wave.classList.add(className);
  wave.style.backgroundColor = '#dedadb';
  wave.style.zIndex = 5;
  wave.style.width = size;
  wave.style.height = size;
  wave.style.top = top;
  return wave;
}

// Función para generar las ondas
function generateWaves() {
  const waveContainer = document.querySelector('.wave-container');

  const containerHeight = waveContainer.clientHeight;
  const numWaves = Math.ceil(containerHeight / 20.5); // Calcula el número de ondas según la altura del contenedor

  for (let i = 0; i < numWaves; i++) {
    const size = `${Math.random() * 20 + 13}px`; // Tamaño aleatorio entre 10px y 30px
    const top = `${i * 20}px`; // Posición vertical escalonada

    // Crea la onda y la agrega al contenedor
    const wave = createWave(`wave${(i % 3) + 1}`, size, top);
    waveContainer.appendChild(wave);
  }
}

// Llama a la función para generar las ondas cuando se cargue la página
window.addEventListener('load', generateWaves);
