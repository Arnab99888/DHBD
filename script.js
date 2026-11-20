const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const birthdayContent = document.getElementById("birthdayContent");

let isOpened = false;

// Envelope open
openBtn.addEventListener("click", () => {

    if (isOpened) return;

    isOpened = true;

    envelope.classList.add("open");

    openBtn.style.display = "none";

    // Show birthday content after envelope opens
    setTimeout(() => {
        birthdayContent.classList.add("show");

        // Start floating hearts
        startHearts();

    }, 1200);

});

// Floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const emojis = ["❤️", "💗", "💕", "💖", "✨", "🌸"];

    heart.innerHTML = emojis[
        Math.floor(Math.random() * emojis.length)
    ];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

// Heart animation starts only after opening
function startHearts() {

    setInterval(() => {
        createHeart();
    }, 500);

}