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