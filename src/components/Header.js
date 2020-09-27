import React from "react";
import PropTypes from "prop-types";

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
              <a href="/" className="nav-link">
                Home
              </a>
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
