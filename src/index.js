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

// disclamer all commented things are neccessary and i want to work
// on it 

// navLeaderboard.addEventListener('click', () => {
//   boardTitle.classList.remove('hidden');
//   leaderboardContainer.classList.remove('hidden');
//   addTitle.classList.add('hidden');
//   formContainer.classList.add('hidden');
// });

// navAddScore.addEventListener('click', () => {
//   boardTitle.classList.add('hidden');
//   leaderboardContainer.classList.add('hidden');
//   addTitle.classList.remove('hidden');
//   formContainer.classList.remove('hidden');
// });

const disableButton = () => {
  submitBtn.disabled = true;
  submitBtn.innerText = 'Posting...';
};


const sendingData = async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const error = document.querySelector('small');
  const parsedScore = Number(score);
  if (name.length > 20 || parsedScore > 1000000 || name.trim().length === 0) {
    error.innerHTML = 'Please enter a valid score or name';
    submitBtn.disabled = false;
    submitBtn.innerText = 'Try again';
    setInterval(() => window.location.reload(), 2000);
    return;
  }
  disableButton();
  await add(name, parsedScore);
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
  const descendingData = waitingData.result.sort(
    (a, b) => b.score - a.score,
  ).filter(
    (a) => a.score <= 1000000000 && a.user.length <= 20,
  );
  descendingData.forEach((result) => {
    leaderboard.innerHTML += `
    <div class="score">${result.user.toUpperCase()}  <span>${result.score}</span></div>
    `;
  });
};

displayScores();