import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./header.css"
import logo from "../../images/Logo v0.2.svg"

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-md navbar-dark navblue">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="Logo" />
      {siteTitle}
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <div className="navbar-split col-md-auto ml-auto">
        <div className="col-md-auto ml-auto navbar-social">
          <ul className="navbar-nav navbar-upper mt-3 mt-md-0 ">
            <li>
              <a href="#">
                <i class="fab fa-facebook-f" style={{ color: "white" }}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter" style={{ color: "white" }}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram" style={{ color: "white" }}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-youtube" style={{ color: "white" }}></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-lower col-md-auto ml-auto">
          <ul className="navbar-nav mt-2 mt-md-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Classes
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Schedule
                </a>
                <a class="dropdown-item" href="#">
                  Private Lessons
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
