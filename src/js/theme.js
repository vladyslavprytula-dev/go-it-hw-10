import '../styles.css';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  switch: document.querySelector('input.js-switch-input'),
  body: document.querySelector('body'),
};
let defaultTheme = Theme.LIGHT;
currentTheme();
refs.switch.addEventListener('change', swtch);
function swtch() {
  event.preventDefault();
  if (refs.switch.checked) {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    localStorage.setItem('currentTheme', Theme.DARK);
  } else {
    refs.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('currentTheme', Theme.LIGHT);
  }
}

function currentTheme() {
  defaultTheme = localStorage.getItem('currentTheme');

  if (defaultTheme == Theme.LIGHT) {
    refs.body.classList.toggle('light-theme');
  }
  if (defaultTheme == Theme.DARK) {
    refs.switch.checked = true;
    refs.body.classList.toggle('dark-theme');
  }
}
