setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hand-hour]");
const minuteHand = document.querySelector("[data-hand-minute]");
const secondHand = document.querySelector("[data-hand-second]");

function setClock() {
  const now = new Date();
  const secondRatio = now.getSeconds() / 60;
  const minuteRatio = (secondRatio + now.getMinutes()) / 60;
  const hourRatio = (minuteRatio + now.getHours()) / 12;

  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();