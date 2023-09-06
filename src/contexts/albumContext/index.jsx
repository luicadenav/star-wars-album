import {createContext} from 'react'
import useSwapiData from '../../customHooks/useSwapiData';

//album inicial vacio suponiendo de que la cantidad de elementos en la api es estatica
let initialAlbum= {peliculas: [], personajes: [], naves: []};
const AlbumContext = createContext(initialAlbum);

// rellenando el estado inicial del album 
for (const category in initialAlbum) {

    if (category=='peliculas'){
        for (let i = 0; i < 6; i++) {
            initialAlbum.peliculas[i]={};
        }
    }else if (category=='personajes') {
        for (let i = 0; i < 82; i++) {
            initialAlbum.personajes[i]={};
        }
    }else if (category=='naves') {
        for (let i = 0; i < 36; i++) {
            initialAlbum.naves[i]={};
        }
    }
}

let inicialEnsayo = {peliculas:{0 : { nombre : 'lacasa', hora: '39'},1: {nombre: 'el carro' ,hora: '25'}},personajes:{0: 'camilo'},naves:{}}




export const AlbumProvider = ({children})=>{
    const peliculas = useSwapiData({ path: 'films' });
    const personajes = useSwapiData({ path: 'people' });
    const naves = useSwapiData({ path: 'starships' });

    return (
        <AlbumContext.Provider value={{peliculas, personajes, naves}} >
            {children}
        </AlbumContext.Provider>
    )
}

export default AlbumContext;