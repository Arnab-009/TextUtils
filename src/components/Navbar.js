import React from "react";
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg bg-${{backgroundColor: props.mode==='dark'?'#151a21':'#cfd9e6'}} border-bottom border-bottom-${props.mode}`} data-bs-theme={props.mode} style={{backgroundColor: props.mode==='dark'?'#151a21':'#cfd9e6'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/*<li className="nav-item">
                <a className="nav-link active" href="/">
                  {props.about}
                </a>
              </li>*/}
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?'Light Mode':'Dark Mode'}</label>
            </div>
          </div>
        </div>
      </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    about: PropTypes.string.isRequired
}

//For default Props
Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About'
};