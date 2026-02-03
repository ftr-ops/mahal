const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const hint = document.getElementById("hint");
const success = document.getElementById("success");
const closeBtn = document.getElementById("closeBtn");

const noMessages = [
  "Are you sure?",
  "Really sure?",
  "Come on...",
  "Try again ;)",
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
