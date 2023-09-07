

const baseUrl = 'https://swapi.dev/api';

function getSwapiData({ path, id }) {
    return fetch(`${baseUrl}/${path}/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => {
                console.error(err);
            });
}

export default getSwapiData;
