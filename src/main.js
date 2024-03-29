import { customCursor } from "./js/custom-cursor.js";
import { themetoggle } from "./js/theme-toggle.js";
import { setupSoundEvents } from "./js/keyboard.js";

document.addEventListener("DOMContentLoaded", function () {
    customCursor();
    themetoggle();
    setupSoundEvents();
});
