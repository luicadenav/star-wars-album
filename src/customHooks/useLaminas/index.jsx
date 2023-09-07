import React from 'react'
import getSwapiData from '../../components/common/js/getSwapiData';
// 1 película, 3 personajes y 1 nave; la segunda configuración contiene 3 personajes y 2 naves.

function getRandomId(max) {
    return Math.floor(Math.random() * max  + 1);
}

function useLaminas() {
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

export default useLaminas;
