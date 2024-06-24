const keySoundMap = {
    '1': '/audio/01.wav',
    '2': '/audio/02.wav',
    '3': '/audio/03.wav',
    '4': '/audio/04.wav',
    '5': '/audio/05.wav',
    '6': '/audio/06.wav'
};

// Objeto que almacenará los objetos de audio activos
const activeAudio = {};

// Función para reproducir el sonido
function playSound(sound) {
    const audio = new Audio(sound);
    audio.loop = true; // Repetir el sonido en bucle
    audio.play();
    return audio;
}

// Función para detener y eliminar un objeto de audio
function stopAndRemoveAudio(key) {
    if (activeAudio[key]) {
        activeAudio[key].pause();
        activeAudio[key].currentTime = 0;
        delete activeAudio[key];
    }

    //si se pulsa la tecla m 0 M se pausa el audio
}

function handleButtonClick(event) {
    const button = event.target.closest('button');
    const key = button.textContent.trim(); // Obtiene el número del botón
    const sound = keySoundMap[key];
    button.classList.toggle('is-active');
    if (button.classList.contains('is-active')) {
        activeAudio[key] = playSound(sound);
        const img = document.getElementById(`img-${key}`); // Los ID de las imágenes comienzan en 1
        if (img) {
            img.style.opacity = 1;
            img.style.zIndex = ++zIndexCounter; // Incrementa el contador y usar como zIndex
        }
    } else {
        stopAndRemoveAudio(key);
        const img = document.getElementById(`img-${key}`);
        if (img) {
            img.style.opacity = 0;
            img.style.zIndex = -1;
        }
    }
}

let zIndexCounter = 0;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const description = document.querySelector('.description');


let isMuted = {};

function handleKeyPress(event) {
    const key = event.key;
    const sound = keySoundMap[key];
    const button = document.getElementById(`button${key}`);

    // Si se presiona la tecla Esc, detén todo y regresa
    if (key === 'Escape') {
        stopAll();
        return;
    }
    // Crear un objeto para almacenar el estado de silencio de cada audio

    if (key === 'm' || key === 'M') {
        for (let key in activeAudio) {
            // Si el audio está actualmente en silencio, lo reanudamos
            if (isMuted[key]) {
                activeAudio[key].muted = false;
                isMuted[key] = false;
            } 
            // Si el audio no está en silencio, lo silenciamos
            else {
                activeAudio[key].muted = true;
                isMuted[key] = true;
            }
        }
        return;
    }

    if (button) {
        button.classList.toggle('is-active');
        if (button.classList.contains('is-active')) {
            activeAudio[key] = playSound(sound);
            const img = document.getElementById(`img-${key}`);
            if (img) {
                img.style.opacity = 1;
                img.style.zIndex = ++zIndexCounter;
                const randomNum = Math.floor(Math.random() * 4) + 1; // Asume que hay 4 imágenes en cada carpeta
                img.src = `/img/keyboard/0${key}/0${randomNum}-s.webp`; // Carga una imagen aleatoria de la carpeta correspondiente
            }

            // Oculta el header y el footer
            // header.classList.add('visually-hidden');
            // footer.classList.add('visually-hidden');
            // description.classList.add('visually-hidden');
        } else {
            stopAndRemoveAudio(key);
            const img = document.getElementById(`img-${key}`);
            if (img) {
                img.style.opacity = 0;
                img.style.zIndex = -1;
            }

            // Si no hay botones activos, muestra el header y el footer
            const buttons = document.querySelectorAll('.keyboard button');
            // if (!Array.from(buttons).some(button => button.classList.contains('is-active'))) {
            //     header.classList.remove('visually-hidden');
            //     footer.classList.remove('visually-hidden');
            //     description.classList.remove('visually-hidden');
            // }
        }
    }
}

function stopAll() {
    // Detén todos los audios activos
    for (let key in activeAudio) {
        stopAndRemoveAudio(key);
    }

    // Restablece la opacidad y el zIndex de todas las imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = 0;
        img.style.zIndex = -1;
        img.style.transition = 'opacity 400ms'; // Agrega la transición aquí
    });

    // Quita la clase 'is-active' de todos los botones
    const buttons = document.querySelectorAll('.keyboard button');
    buttons.forEach(button => {
        button.classList.remove('is-active');
    });

    // Muestra el header, el footer y la descripción
    // header.classList.remove('visually-hidden');
    // footer.classList.remove('visually-hidden');
    // description.classList.remove('visually-hidden');
}

export function setupButtonEvents() {
    const buttons = document.querySelectorAll('.keyboard button');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const description = document.querySelector('.description');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.id.replace('button', '');
            const sound = keySoundMap[key];
            button.classList.toggle('is-active');
            if (button.classList.contains('is-active')) {
                activeAudio[key] = playSound(sound);
                const img = document.getElementById(`img-${key}`);
                if (img) {
                    img.style.opacity = 1;
                    img.style.zIndex = ++zIndexCounter;
                    const randomNum = Math.floor(Math.random() * 4) + 1; // Asume que hay 4 imágenes en cada carpeta
                    img.src = `/img/keyboard/0${key}/0${randomNum}-s.webp`; // Carga una imagen aleatoria de la carpeta correspondiente
                }

                // Oculta el header y el footer
                // header.classList.add('visually-hidden');
                // footer.classList.add('visually-hidden');
                // description.classList.add('visually-hidden');
            } else {
                stopAndRemoveAudio(key);
                const img = document.getElementById(`img-${key}`);
                if (img) {
                    img.style.opacity = 0;
                    // img.style.zIndex = -1;
                }

                // Si no hay botones activos, muestra el header y el footer
                // if (!Array.from(buttons).some(button => button.classList.contains('is-active'))) {
                //     header.classList.remove('visually-hidden');
                //     footer.classList.remove('visually-hidden');
                //     description.classList.remove('visually-hidden');
                // }
            }
        });

    });
    document.addEventListener('keydown', handleKeyPress);
}