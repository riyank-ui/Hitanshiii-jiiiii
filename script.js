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
// =================================
// Typewriter Love Letter
// =================================

const loveLetter = `

My Dearest Hitanshiii Jiiii ❤️,

Happy Girlfriend's Day!

I don't know if words will ever be enough to tell You how much You mean to me, but I wanted to make something with my own hands because You deserve something special.

Every conversation with You, every smile, every little memory has become a beautiful part of my life.

Thank You for being You.

Thank You for making my days brighter.

No matter where life takes us, I hope we continue creating beautiful memories together.

I Love You today,
tomorrow,
and every day after that.

❤️
Forever Yours,
Riyank

`;

const typewriter = document.getElementById("typewriter");

let letterIndex = 0;
let typingStarted = false;

function startTypewriter() {

    if (!typewriter || typingStarted) return;

    typingStarted = true;

    function type() {

        if (letterIndex < loveLetter.length) {

            typewriter.textContent += loveLetter.charAt(letterIndex);

            letterIndex++;

            setTimeout(type, 40);

        }

    }

    type();

}
