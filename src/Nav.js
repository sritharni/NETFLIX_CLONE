import "./Nav.css";
import React, { useEffect, useState } from 'react';


function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        };
    },[]);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img 
            className='nav__logo'
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
            alt="Netflix Logo"
            />

            <div className="menu">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            </div>
            
            <img
            className="nav__avatar"
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg"
            alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav

