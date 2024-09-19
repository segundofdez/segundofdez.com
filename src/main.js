import { customCursor } from "./js/custom-cursor.js";
import { themetoggle } from "./js/theme-toggle.js";
// import { setupButtonEvents } from "./js/setup-buttons.js";
// import { randomizeImages } from './js/img-random.js';

gsap.registerPlugin(Draggable);

document.addEventListener("DOMContentLoaded", function () {
    customCursor();
    themetoggle();
    // setupButtonEvents();
    // randomizeImages();

    // Draggable.create("img", {
    //     bounds: "body",
    //     cursor: "move",
    // });
    const proyectosContainer = document.querySelector('.projects');

    if (proyectosContainer) {
        // Selecciona todos los 'div' dentro del contenedor 'proyectos'
        const proyectos = proyectosContainer.querySelectorAll('div');

        if (proyectos.length > 0) {
            // Selecciona un 'div' aleatoriamente
            const randomIndex = Math.floor(Math.random() * proyectos.length);
            const selectedProyecto = proyectos[randomIndex];

            // Añade la clase 'is-visible' al 'div' seleccionado
            selectedProyecto.classList.add('is-visible');

            // Elimina todos los demás 'div'
            proyectos.forEach((proyecto, index) => {
                if (index !== randomIndex) {
                    proyecto.remove();
                }
            });
        }
    }
});