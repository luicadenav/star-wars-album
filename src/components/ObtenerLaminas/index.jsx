import { useState } from 'react';
import getSwapiData from '../../common/js/getSwapiData';
import './index.css';

const sobres = new Array(4).fill('');

function ObtenerLaminas() {
    const [laminas, setLaminas] = useState([])

    function getRandomId(max) {
        return Math.floor(Math.random() * max  + 1);
    }

    function getFiveLaminas() {
        const randomNumber = Math.random();

        if (randomNumber > 0.5) {
            return Promise.allSettled([
                getSwapiData({ path: 'films', id: getRandomId(6) }),
                getSwapiData({ path: 'people', id: getRandomId(82) }),
                getSwapiData({ path: 'people', id: getRandomId(82) }),
                getSwapiData({ path: 'people', id: getRandomId(82) }),
                getSwapiData({ path: 'starships', id: getRandomId(36) })
            ]);
        }

        return Promise.allSettled([
            getSwapiData({ path: 'people', id: getRandomId(82) }),
            getSwapiData({ path: 'people', id: getRandomId(82) }),
            getSwapiData({ path: 'people', id: getRandomId(82) }),
            getSwapiData({ path: 'starships', id: getRandomId(36) }),
            getSwapiData({ path: 'starships', id: getRandomId(36) })
        ]);
    }

    function getLaminas() {
        getFiveLaminas()
            .then(data => {
                setLaminas(data);
                console.log("🚀 ~ file: index.jsx:14 ~ getLaminas ~ data:", data)
            })
            .catch(() => setLaminas([]));
    }

    return (
        <div>
            <h2>obtener laminas</h2>
            <ul className="sobres">
                {
                    sobres.map((sobre, key) => {
                        return (
                            <li key={key} className="sobres__item"
                                onClick={getLaminas}>
                                <div className="sobres__card"></div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
    
}
export default ObtenerLaminas; 