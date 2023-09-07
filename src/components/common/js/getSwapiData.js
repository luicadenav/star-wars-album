

const baseUrl = 'https://swapi.dev/api';

function getSwapiData({ path, id }) {
    return fetch(`${baseUrl}/${path}/${id}`)
            .then(res => res.json())
            .then(data => data)
            .catch(err => {
                return getSwapiData({ path, id: id + 1 });
            });
}

export default getSwapiData;
