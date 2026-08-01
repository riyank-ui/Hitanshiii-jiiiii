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
// =================================
// Reasons I Love You
// =================================

const reasons = [
    "❤️ Your smile brightens my darkest days.",
    "🌸 You make ordinary moments feel magical.",
    "🥹 You always know how to make me smile.",
    "💖 Your kindness inspires me.",
    "🌷 I feel at peace whenever I'm talking to You.",
    "✨ Your laugh is my favorite sound.",
    "🤍 You make my heart feel at home.",
    "🌹 Every day with You is a new adventure.",
    "💕 You make me want to become a better person.",
    "❤️ Because You're simply You."
];

const reasonText = document.getElementById("reasonText");
const reasonBtn = document.getElementById("reasonBtn");

let reasonIndex = 0;

if (reasonBtn && reasonText) {

    reasonBtn.addEventListener("click", () => {

        reasonText.style.opacity = "0";

        setTimeout(() => {

            reasonText.textContent = reasons[reasonIndex];

            reasonText.style.opacity = "1";

            reasonIndex++;

            if (reasonIndex >= reasons.length) {
                reasonIndex = 0;
            }

        }, 200);

    });

}
// =================================
// Relationship Timer
// =================================

const loveTimer = document.getElementById("loveTimer");

// ❤️ Anniversary Date
const startDate = new Date("2026-07-24T00:00:00");

function updateLoveTimer() {

    if (!loveTimer) return;

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    loveTimer.innerHTML =
        `❤️ ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;

}

updateLoveTimer();

setInterval(updateLoveTimer, 1000);
// =================================
// Gift Box
// =================================

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

if (giftBox && giftMessage) {

    giftBox.addEventListener("click", () => {

        giftBox.textContent = "🎉";

        giftMessage.innerHTML = `
        <h2>For My Favorite Person ❤️</h2>
        <p>
        Thank You for filling my life with happiness, laughter,
        and so much love. I hope this little website made You smile.
        Happy Girlfriend's Day, Hitanshiii Jiiii! 🌷❤️
        </p>
        `;

    });

}
// =================================
// Final Surprise
// =================================

const celebrateBtn = document.getElementById("celebrate");
const finalMessage = document.getElementById("finalMessage");

if (celebrateBtn && finalMessage) {

    celebrateBtn.addEventListener("click", () => {

        finalMessage.innerHTML = `
        🌷<br><br>

        Happy Girlfriend's Day, Hitanshiii Jiiii ❤️<br><br>

        Thank You for loving me, supporting me,
        and making my life so beautiful.<br><br>

        I hope every time You remember today,
        You remember how deeply You are loved.<br><br>

        ❤️ Forever Yours,<br>
        Riyank ❤️
        `;

        // Simple celebration effect
        document.body.style.transition = "1s";
        document.body.style.background =
        "linear-gradient(135deg,#ffb6d9,#ffd6ea,#fff5fb)";

    });

    }
// =================================
// Hearts on Tap
// =================================

document.addEventListener("click", function(e){

    const heart = document.createElement("div");

    heart.className = "tap-heart";

    const hearts = ["❤️","💖","💕","💗"];

    heart.textContent = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1500);

});
// =================================
// Full Screen Gallery
// =================================

const galleryImages = document.querySelectorAll(".gallery-grid img");
const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        viewerImage.src = img.src;

        imageViewer.style.display = "flex";

    });

});

closeViewer.addEventListener("click", () => {

    imageViewer.style.display = "none";

});

imageViewer.addEventListener("click", (e) => {

    if(e.target === imageViewer){

        imageViewer.style.display = "none";

    }

});
// =================================
// Grand Finale Confetti
// =================================

const celebrate = document.getElementById("celebrate");

if (celebrate) {

    celebrate.addEventListener("click", () => {

        if (typeof confetti === "function") {

            confetti({
                particleCount: 180,
                spread: 90,
                origin: { y: 0.6 }
            });

            setTimeout(() => {
                confetti({
                    particleCount: 120,
                    angle: 60,
                    spread: 70,
                    origin: { x: 0 }
                });

                confetti({
                    particleCount: 120,
                    angle: 120,
                    spread: 70,
                    origin: { x: 1 }
                });
            }, 400);

        }

    });

                       }
