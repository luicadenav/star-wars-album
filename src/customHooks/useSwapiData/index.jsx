import React, { useEffect, useState } from 'react';

const baseUrl = 'https://swapi.dev/api';

function useSwapiData({ path }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/${path}`)
            .then(res => res.json())
            .then(data => setData(data.results))
            .catch(err => {
                console.error(err);
                setData([]);
            });
    }, []);

    return data;
}

export default useSwapiData
