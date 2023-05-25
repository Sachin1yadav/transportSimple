import React, { useState } from "react";

import "../style/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img
            src="https://www.transportsimple.com/redesign/images/logo.png"
            alt="logo"
          />
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <Link onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Home</li>
            </Link>
            <Link onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Feature</li>
            </Link>
            <Link onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Industry</li>
            </Link>
            <Link onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>About</li>
            </Link>
            <Link onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Contect us</li>
            </Link>
            
          </ul>
        </div>
        <div className="demoButton">
        <button className="getDemo">Get Demo</button>
        </div>
        <div className="social-media">
          <ul>
            <li></li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {showMediaIcons ? <RxCross1 /> : <GiHamburgerMenu />}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
