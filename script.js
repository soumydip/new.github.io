Detalis = [
  {
    url: "photo/emoji-171.gif",
    text: "I love you ❤️ can you love 💘 me?",
  },
  {
    url: "photo/angry-2498.gif",
    text: "I am sure you are Angry 😡😡 for me 🥺🥺",
  },
  {
    url: "photo/girl-1366_256.gif",
    text: "Thought again ! 🤔🤔🤔 you love 💖😍 me",
  },
];
endContext = [
  {
    url: "photo/cat-133.gif",
    text: "I know you love me 💝🤗 I love you to💘🥰",
  },
];
let currentIndex = 0;
let yesbtn = document.getElementById("yesbtn");
let nobtn = document.getElementById("nobtn");
let photoContener = document.getElementById("photoContener");
let text = document.getElementById("text");

function loadData(index) {
  if (index < Detalis.length) {
    photoContener.src = Detalis[index].url;
    text.textContent = Detalis[index].text;
  } else {
    photoContener.src = endContext[0].url;
    text.textContent = endContext[0].text;
  }
}

function getRandomPosition() {
  const randomX = Math.floor(Math.random() * 300) + "px";
  const randomY = Math.floor(Math.random() * 150) + "px";
  nobtn.style.position = "absolute";
  nobtn.style.left = randomX;
  nobtn.style.top = randomY;
}

nobtn.addEventListener("click", function () {
  if (currentIndex < Detalis.length - 1) {
    currentIndex++;
    loadData(currentIndex);
  } else {
    getRandomPosition();
  }
});

yesbtn.addEventListener("click", function () {
  photoContener.src = endContext[0].url;
  text.textContent = endContext[0].text;
  yesbtn.style.display = "none";
  nobtn.style.display = "none";
});

loadData(currentIndex);
