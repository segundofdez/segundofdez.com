import { customCursor } from "./js/custom-cursor.js";
import { themetoggle } from "./js/theme-toggle.js";
import { setupButtonEvents } from "./js/setup-buttons.js";
import { randomizeImages } from './js/img-random.js';

gsap.registerPlugin(Draggable);

document.addEventListener("DOMContentLoaded", function () {
    customCursor();
    themetoggle();
    setupButtonEvents();
    randomizeImages();


    Draggable.create("img", {
        bounds: "body",
    });
});