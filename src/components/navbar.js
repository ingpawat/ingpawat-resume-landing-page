import { useState } from "react";
import "../components/navStyle.css";


const NavBar = () => {

    const [color, setColor] = useState(false);
    const changColor = () => {
        if (window.scrollY >= 990) {
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
                <li><a href="#"></a>HOME</li>
                <li><a href="#"></a>CONTACT</li>
              </ul>
            </nav>
        </div>
    )
};


export default NavBar;
