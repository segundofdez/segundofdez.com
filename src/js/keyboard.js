const keySoundMap = {
    '1': 'sound1.mp3',
    '2': 'sound2.mp3',
    '3': 'sound3.mp3',
    '4': 'sound4.mp3',
    '5': 'sound5.mp3',
    '6': 'sound6.mp3',
    '7': 'sound7.mp3',
    '8': 'sound8.mp3',
    '9': 'sound9.mp3',
    '0': 'sound10.mp3'
};

function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
}

export function setupSoundEvents() {
    for (let i = 0; i <= 9; i++) {
        const button = document.getElementById(`button${i}`);
        // button.addEventListener('mousedown', function() {
        //     const key = this.textContent;
        //     // playSound(keySoundMap[key]);
        //     this.classList.add('is-active');
        // });

        // button.addEventListener('mouseup', function() {
        //     this.classList.remove('is-active');
        // });

        // button.addEventListener('mouseleave', function() {
        //     this.classList.remove('is-active');
        // });
    }

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key in keySoundMap) {
            // playSound(keySoundMap[key]);
            const button = document.getElementById(`button${key}`);
            if (button) {
                button.classList.add('is-active');
            }
            event.preventDefault();
        }
    });

    document.addEventListener('keyup', function(event) {
        const key = event.key;
        if (key in keySoundMap) {
            const button = document.getElementById(`button${key}`);
            if (button) {
                button.classList.remove('is-active');
            }
        }
    });
}
