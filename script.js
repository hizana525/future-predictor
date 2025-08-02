const emotionPredictions = {
  happy: [
    "You’ll giggle, then trip over nothing, then giggle again. 😆",
    "Laughter will escape your body. Wear a helmet. 🤣🪖",
    "Your joy will scare a pigeon. 🐦😨"
  ],
  sad: [
    "A potato will understand you better than humans. 🥔😢",
    "Your tears will be sold as fancy Himalayan salt. 🧂",
    "Sadness detected. Sending... absolutely no help. 🫥"
  ],
  angry: [
    "You’ll fight a microwave and lose. 🔥🍲",
    "You're so mad, even your mirror avoids you. 🪞👀",
    "Please calm down. You're scaring the WiFi. 📶😬"
  ],
  confused: [
    "You’ll get lost in your kitchen. 🧭",
    "You clicked this by mistake, didn’t you? 🤨",
    "You’ll ask Google why you’re confused, and get more confused. 🤷‍♀️"
  ],
  empathetic: [
    "You’ll cry for someone else's spilled tea. ☕😭",
    "Even chairs feel supported by you. 🪑❤️",
    "You're emotionally subscribed to 3 strangers. 📬"
  ],
  mischievous: [
    "You’ll prank yourself and fall for it. 😈",
    "You’ll swap toothpaste with mayo. Again. 🪥🍯",
    "You'll convince a cat to become a spy. 🐱🕵️"
  ],
  romantic: [
    "You’ll fall in love with WiFi. 📶💘",
    "A sandwich will break your heart. 🥪💔",
    "Your soulmate is probably a sock. 🧦💞"
  ],
  bored: [
    "You’ll count tiles and still lose count. 🧱😐",
    "You’ll talk to your fan. It won’t reply. 🌀",
    "You've memorized shampoo ingredients. 🧴📖"
  ],
  default: [
    "You're floating through space and poor decisions. 🚀",
    "You exist. Barely. 🫠",
    "You’ll blink and forget your purpose. 👀"
  ]
};

const weatherTwists = {
  rainy: "Rain detected. Mood: soggy. 🌧️",
  sunny: "Sun is out. Motivation is not. ☀️🙃",
  stormy: "Thunder outside. Internal screaming inside. ⚡😱",
  foggy: "Vision: 0%. Future: unclear. 🌫️",
  snowy: "Everything’s frozen. Including your goals. ❄️",
  default: "Weather? Useless. Like this prediction. 🌍"
};

const overthinkingLines = [
  "You enabled overthinking. Bold move. 🤔",
  "Prediction processing... for what exactly? 🧠",
  "Are you sure you meant to click that? 😐",
  "Too late. You already overthought it. 🔄",
  "We ran a simulation. It failed. 📉"
];

function revealFuture() {
  const name = document.getElementById('nameInput').value.trim();
  const emotion = document.getElementById('emotionInput').value.trim().toLowerCase();
  const weather = document.getElementById('weatherInput').value.trim().toLowerCase();
  const overthink = document.getElementById('overthinkCheckbox').checked;
  const output = document.getElementById('output');

  if (!name || !emotion) {
    output.textContent = "Please enter your name and emotion. Or don’t. I can't stop you.";
    return;
  }

  const predictions = emotionPredictions[emotion] || emotionPredictions['default'];
  const weatherText = weatherTwists[weather] || weatherTwists['default'];
  const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
  const overthinkText = overthink ? `\n🤔 ${overthinkingLines[Math.floor(Math.random() * overthinkingLines.length)]}` : "";

  output.textContent = `${name}, ${randomPrediction}\n${weatherText}${overthinkText}`;
}

function gaslightUser() {
  alert("Your future has been fixed. You just can’t tell.");
}