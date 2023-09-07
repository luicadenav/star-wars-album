import React, { useEffect, useState } from 'react';

const baseUrl = 'https://swapi.dev/api';

function useSwapiData({ path,id }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/${path}/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => {
                console.error(err);
                setData([]);
            });
    }, []);

    return data;
}

export default useSwapiData
