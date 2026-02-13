const config = window.VALENTINE_CONFIG;
document.title = "For Rati ❤️";

const body = document.body;

/* Soft animated background shift */
let hueShift = 0;
setInterval(() => {
  hueShift += 1;
  body.style.background = `linear-gradient(
    135deg,
    hsl(${340 + hueShift % 20}, 100%, 85%),
    hsl(${20 + hueShift % 20}, 100%, 85%)
  )`;
}, 200);

/* PERSONALIZED TEXT SEQUENCE */

const messages = [
  "Rati… everyday I still cannot believe how lucky I am.",
  "Among trillions of stars and billions of years…",
  "somehow the universe decided I should meet you.",
  "To be alive at the same time as you…",
  "to laugh with you, talk with you, care for you…",
  "is something so incredibly, beautifully unlikely.",
  "Rati, loving you feels like the most natural thing in the world.",
  "And if I had a thousand lifetimes…",
  "I would still search for you in every single one.",
  "You are my once-in-the-universe kind of love. ❤️"
];

const text = document.getElementById("text");
let index = 0;

function showNextMessage() {
  text.style.opacity = 0;

  setTimeout(() => {
    text.textContent = messages[index];
    text.style.opacity = 1;

    // Glow only on final message
    if (index === messages.length - 1) {
      text.classList.add("glow");
    }

    index++;

    if (index < messages.length) {
      setTimeout(showNextMessage, 4000);
    }
  }, 1000);
}

showNextMessage();

/* EMOJI STORY PROGRESSION */

const container = document.querySelector(".floating-elements");

function getEmojiStage() {
  if (index < 3) return config.floatingEmojis.intro;
  if (index < 5) return config.floatingEmojis.soft;
  if (index < 7) return config.floatingEmojis.love;
  if (index < 9) return config.floatingEmojis.forever;
  return config.floatingEmojis.letter;
}

function spawnElement() {
  const stage = getEmojiStage();
  const emoji = stage[Math.floor(Math.random() * stage.length)];

  const div = document.createElement("div");
  div.innerHTML = emoji;
  div.style.left = Math.random() * 100 + "vw";
  div.style.bottom = "-30px";

  const duration = 12 + Math.random() * 6;
  div.style.animationDuration = duration + "s";

  container.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, duration * 1000);
}

setInterval(spawnElement, 600);
