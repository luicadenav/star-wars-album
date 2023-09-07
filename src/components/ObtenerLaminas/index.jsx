import { useState } from 'react';
import useLaminas from '../../customHooks/useLaminas';
import './index.css';

const sobres = new Array(4).fill('');

function ObtenerLaminas() {
    const [laminas, setLaminas] = useState([])

    function getLaminas() {
        useLaminas()
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