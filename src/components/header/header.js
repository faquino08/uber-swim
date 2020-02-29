import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./header.css"
import {Navbar, Nav} from "react-bootstrap"
import logo from "../../images/Logo_1-in-vector.svg"
import "../../images/js/all.js"

const Header = ({ siteTitle }) => (
  <Navbar className="navblue" expand="md">
    <div style={{ maxWidth: "1200px", margin: `0 auto`, width:"100%",height:"auto", display:"flex",}}>
      <Navbar.Brand href="/">
        <img
          src={logo}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        as="button"
        children={hamburger}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="navbar-split justify-content-end">
          <div className="navbar-social justify-content-end">
            <ul className="navbar-nav navbar-upper mt-3 mt-md-0 justify-content-end">
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Classes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Blog</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Navbar.Collapse>
    </div>
  </Navbar>
  /*<nav className="navbar navbar-expand-md navbar-dark navblue">
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
  </nav>*/
)

const hamburger = (
  <div for="burger__input" class="hamburger">
    <span class="burger__lines">
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </span>
  </div>
)

export default Header;