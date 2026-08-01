// ==========================
// Screens Navigation
// ==========================

const screens = document.querySelectorAll(".screen");
const nextButtons = document.querySelectorAll(".next");

let currentScreen = 0;

function showScreen(index){

    screens.forEach(screen=>{
        screen.classList.remove("active");
    });

    screens[index].classList.add("active");
}

nextButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        if(currentScreen < screens.length-1){

            currentScreen++;

            showScreen(currentScreen);

        }

    });

});

// ==========================
// Loading Screen
// ==========================

setTimeout(()=>{

    showScreen(1);

    currentScreen = 1;

},5000);

// ==========================
// Promise Button
// ==========================

const promiseBtn = document.getElementById("promiseBtn");
const piano = document.getElementById("piano");

promiseBtn.onclick = ()=>{

    piano.play();

    currentScreen = 2;

    showScreen(2);

};

// ==========================
// Door Button
// ==========================

document.getElementById("doorBtn").onclick = ()=>{

    currentScreen = 3;

    showScreen(3);

};
