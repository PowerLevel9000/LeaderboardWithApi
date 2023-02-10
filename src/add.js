const add = async (user, score, ) => {
    const ready = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uVPZWLZ22mICWXKvSPwh/scores/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ user, score, }),

    });
    const scoreData = await ready.json();
    return scoreData;
}

export default add;