const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const hint = document.getElementById("hint");
const success = document.getElementById("success");
const closeBtn = document.getElementById("closeBtn");

const noMessages = [
  "Are you sure?",
  "Really sure?",
  "Come on...",
  "Try again",
  "You can’t catch me!",
];

let dodgeCount = 0;

function moveNoButton() {
  const padding = 20;
  const btnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - btnRect.width - padding;
  const maxY = window.innerHeight - btnRect.height - padding;
  const nextX = Math.max(padding, Math.random() * maxX);
  const nextY = Math.max(padding, Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${nextX}px`;
  noBtn.style.top = `${nextY}px`;
}

function updateHint() {
  hint.textContent = noMessages[dodgeCount % noMessages.length];
}

noBtn.addEventListener("mouseenter", () => {
  dodgeCount += 1;
  moveNoButton();
  updateHint();
});

noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dodgeCount += 1;
  moveNoButton();
  updateHint();
});

noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  dodgeCount += 1;
  moveNoButton();
  updateHint();
});

yesBtn.addEventListener("click", () => {
  success.classList.add("show");
  success.setAttribute("aria-hidden", "false");
  launchConfetti();
});

closeBtn.addEventListener("click", () => {
  success.classList.remove("show");
  success.setAttribute("aria-hidden", "true");
});

window.addEventListener("resize", () => {
  if (noBtn.style.position === "fixed") {
    moveNoButton();
  }
});

function launchConfetti() {
  const layer = document.createElement("div");
  layer.className = "confetti-layer";

  const colors = ["#ff4d7e", "#ff7aa2", "#ffd1dc", "#ff93b4", "#ff5c8a"];
  const count = 36;

  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "confetti";
    heart.textContent = "❤";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.color = colors[i % colors.length];
    heart.style.fontSize = `${12 + Math.random() * 16}px`;
    heart.style.setProperty("--fall", `${2 + Math.random() * 1.8}s`);
    heart.style.setProperty("--sway", `${0.8 + Math.random()}s`);
    heart.style.setProperty("--drift", `${-40 + Math.random() * 80}px`);
    layer.appendChild(heart);
  }

  document.body.appendChild(layer);
  setTimeout(() => layer.remove(), 3500);
}

