const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");
const love = document.getElementById("love");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  question.classList.add("hidden");
  love.classList.remove("hidden");
  createHearts();
});

function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = "24px";
    document.body.appendChild(heart);

    let move = setInterval(() => {
      heart.style.top = heart.offsetTop - 2 + "px";
      if (heart.offsetTop < 0) {
        clearInterval(move);
        heart.remove();
      }
    }, 20);
  }, 300);
}