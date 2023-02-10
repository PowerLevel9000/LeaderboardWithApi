import './styles/main.scss';
import { add, getData } from './add.js';

const submitBtn = document.getElementById('submit');

const disableButton = () => {
  submitBtn.disabled = true;
  submitBtn.innerText = 'Posting...';
};
const sendingData = async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const error = document.querySelector('small')
  if (name.length < 20 || !isNaN(score) || score < 1000000) {
    error.innerHTML = "please enter valid score or name";
  }
  await add(name, score);
  window.location.reload();
};
submitBtn.addEventListener('click', sendingData);
submitBtn.addEventListener('click', disableButton);
const refreshBtn = document.querySelector('.refresh-btn');
//  refreshing the whole page

refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

const leaderboard = document.querySelector('.leaderboard');
const displayScores = async () => {
  const waitingData = await getData();
  const descendingData = waitingData.result.sort((a, b) => b.score - a.score).filter((a) => a.score <= 1000000000 && a.user.length <= 20);
  descendingData.forEach((result) => {
    leaderboard.innerHTML += `
    <div class="score">${result.user.toUpperCase()}  <span>${result.score}</span></div>
    `;
  });
};

displayScores();