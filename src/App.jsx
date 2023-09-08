import {useRoutes, BrowserRouter} from 'react-router-dom'
import { AlbumProvider } from './contexts/albumContext';
import './App.css';
import Header from './components/Header/index'
import Aside from './components/Aside/index'
import Album from './components/Album/index'
import NotFound  from './components/NotFound/index'
import ObtenerLaminas from './components/ObtenerLaminas';

const AppRoutes =()=>{
  let routes = useRoutes ([
    {path: '/' , element : <Album/>},
    {path: '/star-wars-album' , element : <Album/>},
    {path: '/star-wars-album/Obtener-Laminas' , element : <ObtenerLaminas/>},
    {path: '/*' , element : <NotFound/>},
  ]);
  return routes;
}

function App() {
  return (
    <BrowserRouter>
     <Header/>
    <div className='content'>
        <Aside/>
        <AlbumProvider>
          <AppRoutes/>
        </AlbumProvider>
    </div>
    </BrowserRouter>
  )
}

export default App;
