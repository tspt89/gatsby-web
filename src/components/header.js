import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

import imagen from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => (
  <header  >
    <Container>
      <Navbar  navbar-expand-lg="true" fixed="top" className="navbar" >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={imagen}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          {siteTitle}
        </Navbar.Brand>
        <Navbar.Toggle navbar-toggler-right="true" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav  className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/eventos">Eventos</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
