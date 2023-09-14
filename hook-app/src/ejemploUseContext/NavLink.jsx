import {Link} from "react-router-dom";

export const NavLink = ({to, name})=>{
    return (
        <li className="nav-item active">
                  <Link className="nav-link" to={to}>{name}</Link>
        </li>
    )
}
