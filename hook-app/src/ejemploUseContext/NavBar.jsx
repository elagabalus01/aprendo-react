import {Link} from "react-router-dom";
import {NavLink} from "./NavLink.jsx";

export const NavBar = ()=>{
    return (
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <Link class="navbar-brand" to="#">Navbar</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <NavLink to="/"  name="home" />
                <NavLink to="/about"  name="About" />
              <NavLink to="/login"  name="Login" />


            </ul>
          </div>
        </nav>
    )
}
