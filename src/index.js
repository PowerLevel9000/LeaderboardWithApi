import joke from './joke.js';
import './styles/main.scss';
import add from './add.js';

const submitBtn = document.getElementById('submit');

const sendingData = async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  await add(name, score);
};
submitBtn.addEventListener('click', sendingData);