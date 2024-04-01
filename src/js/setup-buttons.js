// Objeto que mapea cada número con su archivo de sonido correspondiente
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
}

function handleButtonClick(event) {
    const button = event.target.closest('button');
    const key = button.textContent.trim(); // Obtiene el número del botón
    const sound = keySoundMap[key];
    button.classList.toggle('is-active');
    if (button.classList.contains('is-active')) {
        activeAudio[key] = playSound(sound);
    } else {
        stopAndRemoveAudio(key);
    }
}

function handleKeyPress(event) {
    const key = event.key;
    const sound = keySoundMap[key];
    const button = document.getElementById(`button${key}`);
    if (button) {
        button.classList.toggle('is-active');
        if (button.classList.contains('is-active')) {
            activeAudio[key] = playSound(sound);
        } else {
            stopAndRemoveAudio(key);
        }
    }
}

export function setupButtonEvents() {
    const buttons = document.querySelectorAll('.keyboard button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    document.addEventListener('keydown', handleKeyPress);
}
