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
            <nav nav className="">
              <ul>
                <button><a href="#"></a>HOME</button> 
                <button><a href="#"></a>CONTACT</button>
              </ul>
            </nav>
        </div>
    )
};


export default NavBar;
