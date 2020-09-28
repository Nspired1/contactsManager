import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (props) => {
  //destructuring props object for easier access in h1
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {" "}
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={["fas", "home"]} />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <FontAwesomeIcon icon={["fas", "plus"]} />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <FontAwesomeIcon icon={["fas", "book"]} />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//set a default prop to render in case
Header.defaultProps = {
  branding: "My App",
};

//backup check on property types being exported
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
