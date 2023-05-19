import './styles/main.scss';
import './audio.js';
import { add, getData } from './add.js';
import './navigation.js';

const submitBtn = document.getElementById('submit');

// disable button on submission and wait for posting data
const disableButton = () => {
  submitBtn.disabled = true;
  submitBtn.innerText = 'Posting...';
};

//  Posting A data
const sendingData = async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const error = document.querySelector('small');
  if (name.length > 20 || score > 1000000 || name.trim().length === 0) {
    error.innerHTML = 'please enter valid score or name';
    submitBtn.disabled = true;
    submitBtn.innerText = 'Try again';
  } else {
    await add(name, score);
    window.location.reload();
  }
};

document.getElementById('name').addEventListener('focus', () => {
  submitBtn.disabled = false;
  submitBtn.innerText = 'Submit';
});

submitBtn.addEventListener('click', disableButton);
submitBtn.addEventListener('click', sendingData);

//  refresh page button
const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});

//  displaying the score we have
const displayScores = async () => {
  const leaderboard = document.querySelector('.leaderboard');
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
