'use strict';

const root = document.querySelector(':root');
const btnUp = document.querySelector('.topBar-btnSearch');
const btnDark = document.querySelector('.topBar-btnDark');
const btnLight = document.querySelector('.topBar-btnLight');

btnUp.addEventListener('click', function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  document.querySelector("#finder").value = '';
  document.querySelector("#finder").focus();
});

btnDark.addEventListener('click', () => {
  root.style.setProperty('--mainColor', '#76ACDC');
  root.style.setProperty('--white', '#181818');
  root.style.setProperty('--black', '#f2f2f7');
  root.style.setProperty('--grayBackground', '#121212');
  root.style.setProperty('--grayBorder', '#353535');
  root.style.setProperty('--borderCards', '#3b3b3b');
  root.style.setProperty('--iconTopBar', 'white');
  btnDark.classList.add('hidden');
  btnLight.classList.remove('hidden');
});

btnLight.addEventListener('click', () => {
  root.style.setProperty('--mainColor', '#1c7ed6');
  root.style.setProperty('--white', 'white');
  root.style.setProperty('--black', '#121212');
  root.style.setProperty('--grayBackground', '#f2f2f7');
  root.style.setProperty('--grayBorder', '#d9d9d9');
  root.style.setProperty('--borderCards', 'transparent');
  root.style.setProperty('--iconTopBar', 'black');
  btnLight.classList.add('hidden');
  btnDark.classList.remove('hidden');
});