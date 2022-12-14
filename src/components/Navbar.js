import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a href='/' className="navbar-brand"><strong>{props.brand}</strong></a>
                {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
                    <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{"Enable Dark Mode"}</label>
                </div>
            </div>
        </nav> 
  )
}

Navbar.propTypes = {
    brand: PropTypes.string.isRequired
}   

Navbar.defaultProps = {
    brand: "Set Brand Name"
}