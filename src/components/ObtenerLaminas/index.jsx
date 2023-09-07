import { useEffect, useState } from 'react';
import getSwapiData from '../../common/js/getSwapiData';
import './index.css';
import CardList from '../CardList';

const sobres = new Array(4).fill('');

//obtener un id ramdom

function getRandomId(max) {
        return Math.floor(Math.random() * max  + 1);
    }

//obtener 5 laminas de la API dependiendo de las configuraciones

    function getFiveLaminas() {
        const randomNumber = Math.random();

        if (randomNumber > 0.5) {
            return Promise.all([
                getSwapiData({ path: 'films', id: getRandomId(6) }), 
                getSwapiData({ path: 'people', id: getRandomId(82) }),
                getSwapiData({ path: 'people', id: getRandomId(82) }),
                getSwapiData({ path: 'people', id: getRandomId(82) }),
                getSwapiData({ path: 'starships', id: getRandomId(36) })
            ]);
        }

        return Promise.all([            
            getSwapiData({ path: 'people', id: getRandomId(82) }),
            getSwapiData({ path: 'people', id: getRandomId(82) }),
            getSwapiData({ path: 'people', id: getRandomId(82) }),
            getSwapiData({ path: 'starships', id: getRandomId(36) }),
            getSwapiData({ path: 'starships', id: getRandomId(36) })
        ]);
    }

        

function ObtenerLaminas() {
    const [laminas, setLaminas] = useState([]);


//pedir laminas para setearlas 

    function getLaminas() {
    
        getFiveLaminas()
            .then(data => {
                console.log("🚀 ~ file: index.jsx:47 ~ getLaminas ~ data.value:", data);
                return setLaminas(data);
            })        
            .catch(() => setLaminas([]));
    }
    
    return (
        <div>
            <section>
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
            </section>
            <section>
                <h2>Laminas Obtenidas</h2>
                <CardList list={laminas}/>
            </section>
            
            
            
        </div>
    );
    
}
export default ObtenerLaminas; 