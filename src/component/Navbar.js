import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul
                        className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                        style={{ "--bs-scroll-height": "100px" }}
                    >
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                {props.HomeButton}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#about">{props.About}</a>
                        </li>
                        

                    </ul>
                </div>
                <div className={`form-check form-switch text-${(props.mode==='light'?"dark":"light")}`}>
                    <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch " onChange={props.toggleMode} checked={props.mode === "dark"} />
                    <label className="form-check-label" htmlFor="checkNativeSwitch">
                        {props.mode==='light'?"Enable Dark Mode": "Enable Light Mode"}
                    </label>
                </div>

            </div>
        </nav>


    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    HomeButton: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Set Title Here',
    HomeButton: 'Set Home',
    About: 'Set about Here'
};
