import React from 'react';
// import "../css/NavBar.css"

const NavBar =()=>{
        return(
            <nav className="Nav"> 
                
                <button id="homeBtn"><a href="#bio">Home</a></button>
                <button id="projectBtn"><a href="#project">Projects</a></button>
                <button id="aboutBtn"><a href="#about">About</a></button>
                <button id="contactBtn"><a href="#contact">Contact</a></button>
                {/* <NavLink className="inactive" activeClassName="active" exact to={"/"}>Home</NavLink>
                <NavLink className="inactive" activeClassName="active" exact to={"/projects"}>Projects</NavLink>
                <NavLink className="inactive" activeClassName="active" exact to={"/about"}>About</NavLink>
                <NavLink className="inactive" activeClassName="active" exact to={"/contact"}>Contact</NavLink> */}
            </nav>
        )
}

export default NavBar;