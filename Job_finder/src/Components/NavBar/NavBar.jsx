import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);
  return (
    <div>
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <strong>Job</strong>Search <i className="fab fa-typo3"></i>
            </div>

            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <div to="/" className="nav-links" onClick={closeMobileMenu}>
                  Jobs
                </div>
              </li>
              <li className="nav-item">
                <div to="/" className="nav-links" onClick={closeMobileMenu}>
                Contact
                </div>
              </li>
              <li className="nav-item">
                <div
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Companies
                </div>
              </li>
              <li className="nav-item">
                <div
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </div>
              </li>

              <li className="nav-item">
                <div
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;
