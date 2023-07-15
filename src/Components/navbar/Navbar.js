import React from "react";
import Proptypes from 'prop-types'
import './navbar.css'
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar">
        
        <div className="container-fluid">

          <a className="navbar-brand" href="/">
            <img src={props.brandSrc}
              alt=""
              width="65"
              className="d-inline-block align-text-top " />

            <div className="brand-name gradient__text">{props.brandName}</div>

          </a>

        </div>

      </nav>
    </>
  );
}

Navbar.propTypes = {
    brandSrc: Proptypes.string.isRequired,
    brandName: Proptypes.string.isRequired,
    searchBox: Proptypes.string.isRequired
}
Navbar.defaultProps = {
    brandSrc: 'Imgsrc Here',
    brandName: 'BrandName Here',
    searchBox: 'What to search for'
};
