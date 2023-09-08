import { NavLink } from "react-router-dom";
import './index.css';

function Aside() {
    return(
        <nav className="aside-content">
            <ul>
                <li>
                    <NavLink to='/'>Mi Album</NavLink>
                </li>
                <li>
                    <NavLink to='/star-wars-album/Obtener-Laminas'>Obtener Laminas</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Aside;