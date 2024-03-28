document.addEventListener("DOMContentLoaded", function () {
    customCursor();
});

function customCursor() {
    const cursorModule = (function () {
        let cursorX = 0;
        let cursorY = 0;
        let mouseX = 0;
        let mouseY = 0;
        const easingFactor = 0.08;
        const jsCursor = document.querySelector(".js-cursor");
        const isClickedClass = "is-clicked";
        const isHiddenClass = "is-hidden";
        const isHoveredClass = "is-hover";

        function isTouchDevice() {
            return (
                "ontouchstart" in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
            );
        }

        function onMouseMove(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }

        function updateCursorPosition() {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            cursorX += dx * easingFactor;
            cursorY += dy * easingFactor;

            jsCursor.style.left = `${cursorX}px`;
            jsCursor.style.top = `${cursorY}px`;

            requestAnimationFrame(updateCursorPosition);
        }

        function init() {
            if (!isTouchDevice()) {
                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mousedown", () =>
                    jsCursor.classList.add(isClickedClass)
                );
                document.addEventListener("mouseup", () =>
                    jsCursor.classList.remove(isClickedClass)
                );
                document.body.addEventListener("mouseenter", () => {
                    jsCursor.classList.remove(isHiddenClass);
                    jsCursor.classList.remove(isHoveredClass);
                });
                document.body.addEventListener("mouseleave", () =>
                    jsCursor.classList.add(isHiddenClass)
                );

                document.querySelectorAll("a").forEach((el) => {
                    el.addEventListener("mouseover", () =>
                        jsCursor.classList.add(isHoveredClass)
                    );
                    el.addEventListener("mouseout", () =>
                        jsCursor.classList.remove(isHoveredClass)
                    );
                });

                updateCursorPosition();
            }
        }

        return {
            init: init
        };
    })();

    cursorModule.init();
}
