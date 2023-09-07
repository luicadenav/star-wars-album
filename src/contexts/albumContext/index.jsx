import {createContext, useState} from 'react'
import useSwapiData from '../../customHooks/useSwapiData';

//album inicial vacio suponiendo de que la cantidad de elementos en la api es estatica
let initialAlbum= {
    peliculas: new Array(6).fill({}),
    personajes: new Array(82).fill({}),
    naves: new Array(36).fill({})
};

const AlbumContext = createContext(initialAlbum);

export const AlbumProvider = ({children})=>{
    const [peliculas, setPeliculas] = useState(initialAlbum.peliculas);
    const [personajes, setPersonajes] = useState(initialAlbum.personajes);
    const [naves, setNaves] = useState(initialAlbum.naves);

    return (
        <AlbumContext.Provider value={{peliculas, personajes, naves}} >
            {children}
        </AlbumContext.Provider>
    )
}

export default AlbumContext;