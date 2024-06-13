// src/components/Navbar.js
import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ logo, links }) => {
  return (
    <header>
      <div className="hc-container-logos">
        <div className="hc-container-outer">
          <div className="hc-container-logos__inner">
            <img className="hc-logo" src={logo} alt="Logo" />
            <div className="hc-links__container">
              {links.map((link, index) => (
                <a key={index} href={link.href} className="hc-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
