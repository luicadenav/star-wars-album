
import { useContext } from "react";
import AlbumContext from '../contexts/albumContext'
import CardsSection from "./common/CardsSection";

function Album() {
    const {peliculas, personajes, naves } = useContext(AlbumContext);
    console.log("🚀 ~ file: Album.jsx:8 ~ Album ~ naves:", naves)
    console.log("🚀 ~ file: Album.jsx:8 ~ Album ~ personajes:", personajes)
    console.log("🚀 ~ file: Album.jsx:8 ~ Album ~ peliculas:", peliculas)
    
    return (
        <>
            <h2>Album</h2> 
            <CardsSection list={peliculas} title="peliculas" />
            <CardsSection list={personajes} title="personajes" />
            <CardsSection list={naves} title="naves" />
        </>
    );    
}

export default Album;