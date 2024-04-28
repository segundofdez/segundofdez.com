let positions = [];
let excludedElement;
let totalImageArea = 0;
const MAX_ATTEMPTS = 2000;

function getRandomPosition(img) {
    let overlap = false;
    let randomLeft, randomTop;
    let viewportArea = document.documentElement.clientWidth * document.documentElement.clientHeight;
    let attempts = 0;

    do {
        overlap = false;
        randomLeft = Math.floor(Math.random() * (document.documentElement.clientWidth - img.offsetWidth));
        randomTop = Math.floor(Math.random() * (document.documentElement.clientHeight - img.offsetHeight));

        // Verifica si las nuevas coordenadas se superponen con el div 'keyboard-content'
        if (randomLeft < excludedElement.left + excludedElement.width && randomLeft + img.offsetWidth > excludedElement.left &&
            randomTop < excludedElement.top + excludedElement.height && randomTop + img.offsetHeight > excludedElement.top) {
            overlap = true;
        }

        // Si el área total de las imágenes es menor que el área del viewport, verifica la superposición con las imágenes existentes
        if (totalImageArea <= viewportArea) {
            for (let pos of positions) {
                if (randomLeft < pos.left + img.offsetWidth && randomLeft + img.offsetWidth > pos.left &&
                    randomTop < pos.top + img.offsetHeight && randomTop + img.offsetHeight > pos.top) {
                    overlap = true;
                    break;
                }
            }
        }

        attempts++;
    } while (overlap && attempts < MAX_ATTEMPTS);

    // Añade las nuevas coordenadas a la lista de posiciones
    positions.push({ left: randomLeft, top: randomTop });

    // Añade el área de la imagen al área total
    totalImageArea += img.offsetWidth * img.offsetHeight;

    return { left: randomLeft, top: randomTop };
}

function randomizeImages() {
    let el = document.querySelector('.keyboard-content');
    let rect = el.getBoundingClientRect();
    let docEl = document.documentElement;
    let left = rect.left + window.scrollX - docEl.clientLeft;
    let top = rect.top + window.scrollY - docEl.clientTop;
    excludedElement = { left: left, top: top, width: rect.width, height: rect.height };

    // Coloca las imágenes en posiciones aleatorias
    const images = document.querySelectorAll('img');

    images.forEach((img, index) => {
        img.onload = function() {
            let pos = getRandomPosition(img);
            let right = ((document.documentElement.clientWidth - pos.left - img.offsetWidth) / document.documentElement.clientWidth * 100);
            let bottom = ((document.documentElement.clientHeight - pos.top - img.offsetHeight) / document.documentElement.clientHeight * 100);
            img.style.right = Math.round(right) + "%";
            img.style.bottom = Math.round(bottom) + "%";
        }
        if (img.complete) {
            img.onload();
        }
        document.body.append(img);
    });

    // Si la imagen es 'img-1', imagen aleatoria de la carpeta
    const img1 = document.getElementById('img-5');
    if (img1) {
        const randomNum = Math.floor(Math.random() * 4) + 1; // imgs
        img1.src = `/img/keyboard/05/0${randomNum}-s.webp`;
    }
}

export { randomizeImages };