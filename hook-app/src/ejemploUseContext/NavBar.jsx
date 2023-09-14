import {Link, NavLink} from "react-router-dom";
//import {NavLink} from "./NavLink.jsx";

export const NavBar = ()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <NavLink to="/" className={
                    ({isActive})=> {
                        console.log(isActive)
                        return `nav-link ${isActive ? 'active' : ''} `
                    }
                } >
                    Home
                </NavLink>

                <NavLink to="/about" className={
                    ({isActive})=> {
                        console.log(isActive)
                        return `nav-link ${isActive ? 'active' : ''} `
                    }
                }>
                    About
                </NavLink>
                <NavLink to="/login" className={
                    ({isActive})=> {
                        console.log(isActive)
                        return `nav-link ${isActive ? 'active' : ''} `
                    }
                } >
                    Login
                </NavLink>


            </ul>
          </div>
        </nav>
    )
}
