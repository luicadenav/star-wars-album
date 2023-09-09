import axios from "axios";

const baseUrl = 'https://swapi.dev/api';

function getSwapiData({ path, id }) {
    return axios.get(`${baseUrl}/${path}/${id}`)     
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.log("🚀 ~ file: getSwapiData.js:9 ~ getSwapiData ~ err:", err)
                
                return getSwapiData({ path, id: id + 1 });
            });
}

export default getSwapiData;
