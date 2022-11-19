import { useState } from "react";
import "../components/navStyle.css";


const NavBar = () => {

    const [color, setColor] = useState(false);
    const changColor = () => {
        if (window.scrollY >= 600) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    

    window.addEventListener('scroll', changColor)

    return (
        <div className={color ? 'nav-bar-trans' : 'nav-bar' }>
            <nav nav className="Navbar">
              <ul>
                {/* <a className="HOME" href="#1">HOME</a> */}
                <a href="#2">CONTACT</a>
                <a href="#3">TECH STACK</a>
              </ul>
            </nav>
        </div>
    )
};


export default NavBar;
