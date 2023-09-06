import {useRoutes, BrowserRouter} from 'react-router-dom'
import { AlbumProvider } from './Context';
import './App.css';
import Header from './components/Header'
import Aside from './components/Aside'
import Album from './components/Album'
import NotFound  from './components/NotFound'
import ObtenerLaminas from './components/ObtenerLaminas';

const AppRoutes =()=>{
  let routes = useRoutes ([
    {path: '/' , element : <Album/>},
    {path: '/Obtener-Laminas' , element : <ObtenerLaminas/>},
    {path: '/*' , element : <NotFound/>},
  ]);
  return routes;
}

function App() {
  return (
    <AlbumProvider>
      <BrowserRouter>
        <Header/>
        <Aside/>
        <AppRoutes/>
      </BrowserRouter>
    </AlbumProvider>
  )
}

export default App;
