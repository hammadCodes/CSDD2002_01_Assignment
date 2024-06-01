import React from "react";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <header>
      <div class="hc-container-logos">
        <div class="hc-container-outer">
          <div class="hc-container-logos__inner">
            <img class="hc-logo" src={logo} alt="Logo" />
            <div class="hc-links__container">
              <a href="/" class="hc-link">
                Home
              </a>
              <a href="#blogs-section" class="hc-link">
                Blogs
              </a>
              <a href="/" class="hc-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
