import { NavLink } from "react-router-dom";
import './index.css';

function Aside() {
    return(
        <nav className="aside-content">
            <ul>
                <li>
                    <NavLink to='/'>mi album</NavLink>
                </li>
                <li>
                    <NavLink to='/star-wars-album/Obtener-Laminas'>obtener laminas</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Aside;