import './index.css';

function Card({ id, nombre }) {
    return (
        <div className="card">
            {
                nombre ? ( 
                    <p>nombre : {nombre}</p>
                ) : (
                    <div className="card__id">
                        <span>{id}</span>
                    </div>
                )         
            }
        </div>
    );
}

export default Card;