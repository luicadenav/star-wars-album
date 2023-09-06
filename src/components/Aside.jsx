import { NavLink } from "react-router-dom";

function Aside() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Mi Album</NavLink>
                </li>
                <li>
                    <NavLink to='/Obtener-Laminas'>Obtener Laminas</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Aside;