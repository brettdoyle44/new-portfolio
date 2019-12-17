import React from "react"
import { Nav, Navbar } from "react-bootstrap"

const Navigation = () => (
  <>
    <Navbar style={{ backgroundColor: "#f76c6c" }}>
      <Navbar.Brand style={{ color: "#24305e" }} href="#home">
        Navbar
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link style={{ color: "#24305e" }} href="#home">
          Home
        </Nav.Link>
        <Nav.Link style={{ color: "#24305e" }} href="#features">
          Features
        </Nav.Link>
        <Nav.Link style={{ color: "#24305e" }} href="#pricing">
          Pricing
        </Nav.Link>
      </Nav>
    </Navbar>
  </>
)

export default Navigation
