import { useContext } from "react";
import AlbumContext from '../../contexts/albumContext/index'

function Card({ id, nombre }) {
    const context = useContext(AlbumContext);

        return (
            <div>
                <h1>card</h1>
                <span>id: {id}</span>
                <p>nombre : {nombre}</p>
            </div>
        );
    
}
export default Card;