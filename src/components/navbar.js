import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-scroll"
import "../styles/main.css"

const Navigation = () => (
  <>
    <Navbar sticky="top" style={{ backgroundColor: "#f76c6c" }}>
      <Navbar.Brand style={{ color: "#fff" }} href="#home">
        &lt;BrettDoyle /&gt;
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link style={{ color: "#fff" }}>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Portfolio
          </Link>
        </Nav.Link>
        <Nav.Link style={{ color: "#fff" }}>
          <Link to="about" spy={true} smooth={true} offset={-60} duration={500}>
            About
          </Link>
        </Nav.Link>
        <Nav.Link style={{ color: "#fff" }} href="#pricing">
          <Link
            to="resume"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Resume
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  </>
)

export default Navigation
