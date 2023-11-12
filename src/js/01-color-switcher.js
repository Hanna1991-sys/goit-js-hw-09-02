import getRadomHexColor from './randomHexColor';

const dataStartRef = document.querySelector('[data-start]');
const dataStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

const timer = null;

dataStartRef.addEventListener('click', onStart);
dataStopRef.addEventListener('click', onStop);

function onStart() {
  timerColor = setInterval(getColor, 1000);

  dataStartRef.toggleAttribute('disabled');
}

function onStop() {
  clearInterval(timerColor);

  dataStartRef.removeAttribute('disabled');
}

function getColor() {
  bodyRef.style.backgroundColor = getRadomHexColor();
}
