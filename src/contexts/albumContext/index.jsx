import {createContext, useState} from 'react'
import useSwapiData from '../../customHooks/useSwapiData';

//album inicial vacio suponiendo de que la cantidad de elementos en la api es estatica
let initialAlbum= {peliculas: [], personajes: [], naves: []};
const AlbumContext = createContext(initialAlbum);

// rellenando el estado inicial del album 
for (const category in initialAlbum) {

    if (category=='peliculas'){
        for (let i = 0; i < 6; i++) {
            initialAlbum.peliculas[i]={title:''};
        }
    }else if (category=='personajes') {
        for (let i = 0; i < 82; i++) {
            initialAlbum.personajes[i]={name:''};
        }
    }else if (category=='naves') {
        for (let i = 0; i < 36; i++) {
            initialAlbum.naves[i]={name:''};
        }
    }
}

console.log(initialAlbum);






export const AlbumProvider = ({children})=>{
    const pelicula = useSwapiData({ path: 'films',id: '1' });
    const personaje = useSwapiData({ path: 'people', id: '1' });
    const nave = useSwapiData({ path: 'starships', id: '2'});

   const peliculas = initialAlbum.peliculas;
    const personajes = initialAlbum.personajes;
    const naves = initialAlbum.naves;
    peliculas[0] = pelicula;
    personajes[0] = personaje;
    naves[0] = nave;/*   */


    return (
        <AlbumContext.Provider value={{peliculas, personajes, naves}} >
            {children}
        </AlbumContext.Provider>
    )
}

export default AlbumContext;