import {Link} from "react-router-dom";

export const NavLink = ({to, name})=>{
    return (
        <li class="nav-item active">
                  <Link class="nav-link" to={to}>{name}<span class="sr-only">(current)</span></Link>
        </li>
    )
}
