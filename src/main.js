import { customCursor } from "./js/custom-cursor.js";
import { themetoggle } from "./js/theme-toggle.js";
import { setupButtonEvents } from "./js/setup-buttons.js";

document.addEventListener("DOMContentLoaded", function () {
    customCursor();
    themetoggle();
    setupButtonEvents();

    let positions = [];

    function getRandomPosition(img) {
        let randomLeft, randomTop, overlap;
        do {
            overlap = false;
            // Genera coordenadas aleatorias dentro del viewport
            randomLeft = Math.floor(Math.random() * (window.innerWidth - img.offsetWidth));
            randomTop = Math.floor(Math.random() * (window.innerHeight - img.offsetHeight));

            // Verifica si las nuevas coordenadas se superponen con las existentes
            for (let pos of positions) {
                if (Math.abs(pos.left - randomLeft) < img.offsetWidth && Math.abs(pos.top - randomTop) < img.offsetHeight) {
                    overlap = true;
                    break;
                }
            }
        } while (overlap);

        // Añade las nuevas coordenadas a la lista de posiciones
        positions.push({ left: randomLeft, top: randomTop });

        return { left: randomLeft, top: randomTop };
    }

    //img draggable
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.style.position = "absolute";
        img.style.zIndex = 1000;

        img.onload = function() {
            let pos = getRandomPosition(img);

            // Aplica las coordenadas a la imagen
            img.style.left = pos.left + "px";
            img.style.top = pos.top + "px";
        }
        document.body.append(img);

        // img.onmousedown = function(e) {
        //     let shiftX = e.clientX - img.getBoundingClientRect().left;
        //     let shiftY = e.clientY - img.getBoundingClientRect().top;

        //     moveAt(e.pageX, e.pageY);

        //     function moveAt(pageX, pageY) {
        //         let newX = pageX - shiftX;
        //         let newY = pageY - shiftY;
        //         newX = Math.max(newX, 0);
        //         newY = Math.max(newY, 0);
        //         newX = Math.min(newX, document.documentElement.clientWidth - img.offsetWidth);
        //         newY = Math.min(newY, document.documentElement.clientHeight - img.offsetHeight);
        //         img.style.left = newX + "px";
        //         img.style.top = newY + "px";
        //     }

        //     function onMouseMove(event) {
        //         moveAt(event.pageX, event.pageY);
        //     }

        //     document.addEventListener("mousemove", onMouseMove);

        //     document.onmouseup = function () {
        //         document.removeEventListener("mousemove", onMouseMove);
        //         document.onmouseup = null;
        //     };
        // };
    });
});