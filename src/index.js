import './styles/main.scss';
import { add, getData } from './add.js';
//  for now lets leave the contact
const submitBtn = document.getElementById('submit');
const navLeaderboard = document.getElementById('leaderBoard');
const navAddScore = document.getElementById('addScores');
const boardTitle = document.getElementById('boardTitle');
const addTitle = document.getElementById('addTitle');
const leaderboardContainer = document.querySelector('.leaderboard-container');
const formContainer = document.querySelector('.form-container');

navLeaderboard.addEventListener('click', () => {
  boardTitle.classList.remove('hidden');
  leaderboardContainer.classList.remove('hidden');
  addTitle.classList.add('hidden');
  formContainer.classList.add('hidden');
});

navAddScore.addEventListener('click', () => {
  boardTitle.classList.add('hidden');
  leaderboardContainer.classList.add('hidden');
  addTitle.classList.remove('hidden');
  formContainer.classList.remove('hidden');
});

const disableButton = () => {
  submitBtn.disabled = true;
  submitBtn.innerText = 'Posting...';
};
submitBtn.addEventListener('click', disableButton);
const sendingData = async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const error = document.querySelector('small');
  if (name.length > 20 || score > 1000000) {
    error.innerHTML = 'please enter valid score or name';
    submitBtn.disabled = false;
    submitBtn.innerText = 'Try again';
    setInterval(() => window.location.reload(), 2000);
    return;
  }
  await add(name, score);
  window.location.reload();
};

submitBtn.addEventListener('click', sendingData);

const refreshBtn = document.querySelector('.refresh-btn');
//  refreshing the whole page

refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

const leaderboard = document.querySelector('.leaderboard');
const displayScores = async () => {
  const waitingData = await getData();
  const descendingData = waitingData.result
    .filter(
      (a) => !Number.isNaN(Number(a.score)) && a.score <= 1000000000 && a.user.length <= 20,
    )
    .sort((a, b) => Number(b.score) - Number(a.score));

  descendingData.forEach((result) => {
    leaderboard.innerHTML += `
    <div class="score">${result.user.toUpperCase()}  <span>${result.score}</span></div>
    `;
  });
};

displayScores();
const audio = document.getElementById('myAudio');
document.getElementById('play-audio').addEventListener('click', () => {
  audio.play();
});

window.addEventListener('load', () => {
  audio.play();
});