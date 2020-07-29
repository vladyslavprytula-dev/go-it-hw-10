import recipes from '../templates/recipes.hbs';
import menu from '../menu.json';
import '../styles.css';
const menuRef = document.querySelector('.js-menu');
const markup = recipes(menu);
menuRef.insertAdjacentHTML('beforeend', markup);
