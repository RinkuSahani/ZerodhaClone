import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [selectNav, setSelectedNav] = useState(0);

  const handleNavClick = (index) => {
    setSelectedNav(index);
  };

  const navClass = "menu";
  const activeNavClass = "menu selected";

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid " style={{margin:"0rem 2em"}}>
        <Link to="/" onClick={() => handleNavClick(5)}>
          <div className={selectNav === 5 ? activeNavClass : navClass}>
            <img
              src="/media/images/logo.svg"
              style={{ width: "10rem" }}
              alt="Zerodha logo"
              className="zerodha-image"
            />
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
          <div className="collapse navbar-collapse navbar-links" id="navbarNav">
            <ul className="navbar-nav navbar-info ">
              <li className="nav-item">
                <Link
                  className="nav-link mx-auto"
                  to="/signup"
                  onClick={() => handleNavClick(0)}
                >
                  <p className={selectNav === 0 ? activeNavClass : navClass}>
                    Signup
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-auto"
                  to="/about"
                  onClick={() => handleNavClick(1)}
                >
                  <p className={selectNav === 1 ? activeNavClass : navClass}>
                    About
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-auto"
                  to="/product"
                  onClick={() => handleNavClick(2)}
                >
                  <p className={selectNav === 2 ? activeNavClass : navClass}>
                    Product
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-auto"
                  to="/pricing"
                  onClick={() => handleNavClick(3)}
                >
                  <p className={selectNav === 3 ? activeNavClass : navClass}>
                    Pricing
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-auto"
                  to="/support"
                  onClick={() => handleNavClick(4)}
                >
                  <p className={selectNav === 4 ? activeNavClass : navClass}>
                    Support
                  </p>
                </Link>
              </li>
            </ul>
          </div>
       
      </div>
    </nav>
  );
}

export default Navbar;
