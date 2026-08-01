// ===============================
// Girlfriend's Day Website
// By Riyank ❤️
// ===============================

// Get all screens
const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

// Show only one screen
function showScreen(index) {
    screens.forEach(screen => screen.classList.remove("active"));

    if (screens[index]) {
        screens[index].classList.add("active");
        currentScreen = index;
    }
}

// Start from loading screen
showScreen(0);

// -------------------------------
// Auto move from Loading
// -------------------------------

setTimeout(() => {
    showScreen(1);
}, 5000);

// -------------------------------
// Next Buttons
// -------------------------------

document.querySelectorAll(".next").forEach(button => {

    button.addEventListener("click", () => {

        if (currentScreen < screens.length - 1) {
            showScreen(currentScreen + 1);
        }

    });

});

// -------------------------------
// Promise Button
// -------------------------------

const promiseBtn = document.getElementById("promiseBtn");
const piano = document.getElementById("piano");

if (promiseBtn) {

    promiseBtn.addEventListener("click", () => {

        if (piano) {
            piano.play().catch(() => {});
        }

        showScreen(2);

    });

}

// -------------------------------
// Door Button
// -------------------------------

const doorBtn = document.getElementById("doorBtn");

if (doorBtn) {

    doorBtn.addEventListener("click", () => {

        showScreen(3);

    });

}

// -------------------------------
// Music Button
// -------------------------------

const musicBtn = document.getElementById("musicBtn");

if (musicBtn && piano) {

    musicBtn.addEventListener("click", () => {

        if (piano.paused) {

            piano.play().catch(() => {});
            musicBtn.innerHTML = "⏸️";

        } else {

            piano.pause();
            musicBtn.innerHTML = "🎵";

        }

    });

}
