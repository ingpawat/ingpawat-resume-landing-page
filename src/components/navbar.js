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
            <nav className="Navbar">
              <ul>
                <a href="#2">CONTACT</a>
                {color? ( <a href="#3">STACK</a>) :( <a href="#3">TECH STACK</a>)}
                <a href="#4">ARCHIVE</a>
              </ul>
            </nav>
        </div>
    )
};


export default NavBar;
