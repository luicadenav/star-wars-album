import './index.css';

function Card({ id, nombre }) {

    function isSpecial(id) {
       id <= 10 ? true : false;
    }

   
    
    return (
        <div className="card">
            {
                nombre ? ( 
                    <div>
                       <p>nombre : {nombre}</p>
                       
                    </div>
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