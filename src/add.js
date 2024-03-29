const getData = async () => {
  const receive = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Tobk4hm6O32zn1RQqpj8/scores/');
  const gettingData = await receive.json();
  return gettingData;
};

const add = async (user, score) => {
  const ready = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Tobk4hm6O32zn1RQqpj8/scores/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ user, score }),

  });
  const scoreData = await ready.json();
  return scoreData;
};

export { add, getData };