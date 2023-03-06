const target = document.getElementById("target");
let skills = ["développeur", "hackeur", "blockchain enthousiaste"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  if (skills[wordIndex][letterIndex] != " ") {
    letter.textContent = skills[wordIndex][letterIndex];
  } else {
    letter.innerHTML = "&nbsp";
  }

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= skills.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < skills[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 100);
};

loop();
