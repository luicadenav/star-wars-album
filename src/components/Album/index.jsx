import CardsSection from "../CardsSection/index";

function Album() {
    return (
        <div>
            <h2>Album</h2> 
            <CardsSection title="peliculas" />
            <CardsSection title="personajes" />
            <CardsSection title="naves" />
        </div>
    );    
}

export default Album;