import CardsSection from "../CardsSection/index";
import "./index.css"

function Album() {
    return (
        <div className="album-content">
            <h2>mi album</h2> 
            <CardsSection title="peliculas" />
            <CardsSection title="personajes" />
            <CardsSection title="naves" />
        </div>
    );    
}

export default Album;