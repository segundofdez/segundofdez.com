import { customCursor } from "./js/custom-cursor.js";
import { themetoggle } from "./js/theme-toggle.js";
import { setupButtonEvents } from "./js/setup-buttons.js";

document.addEventListener("DOMContentLoaded", function () {
    customCursor();
    themetoggle();
    setupButtonEvents();
});
