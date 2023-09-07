import React from 'react'
import getSwapiData from '../../components/common/js/getSwapiData';
// 1 película, 3 personajes y 1 nave; la segunda configuración contiene 3 personajes y 2 naves.

function useLaminas() {
    const randomNumber = Math.random();

    if (randomNumber > 0.5) {
        return Promise.all([
            getSwapiData({ path: 'films', id: Math.round(Math.random() * 10) }),
            getSwapiData({ path: 'people', id: Math.round(Math.random() * 10) }),
            getSwapiData({ path: 'people', id: Math.round(Math.random() * 10) }),
            getSwapiData({ path: 'people', id: Math.round(Math.random() * 10) }),
            getSwapiData({ path: 'starships', id: Math.round(Math.random() * 10) })
        ]);
    }

    return Promise.all([
        getSwapiData({ path: 'people', id: Math.round(Math.random() * 10) }),
        getSwapiData({ path: 'people', id: Math.round(Math.random() * 10) }),
        getSwapiData({ path: 'people', id: Math.round(Math.random() * 10) }),
        getSwapiData({ path: 'starships', id: Math.round(Math.random() * 10) }),
        getSwapiData({ path: 'starships', id: Math.round(Math.random() * 10) })
    ]);
}

export default useLaminas;
