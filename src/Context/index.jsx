import {createContext} from 'react'

const AlbumContext = createContext();
export const AlbumProvider = ({children})=>{
    return (
        <AlbumContext.Provider>
            {children}
        </AlbumContext.Provider>
    )
}
