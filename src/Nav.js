import React, { useEffect, useState } from "react";
import "./Nav.css";
import Netflix from './Component/image/Netflix_logo.png';
import Avater from './Component/image/avator.png';

function Nav() {
    const [show, handleShow] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    return (
        <div className={`nav ${show ? "nav_black" : ""}`}>
            <img src={Netflix} alt="Netflix Logo" className="nav_logo" />
            <img src={Avater} alt="Avatar" className="nav_avatar" />
        </div>
    );
}

export default Nav;
