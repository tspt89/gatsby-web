import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

import imagen from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => (
  <header  >
    <Container>
      <Navbar  navbar-expand-lg="true" fixed="top" className="color-nav" >
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
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/eventos">Mis eventos</Nav.Link>
            <Nav.Link href="/page-2">Eventos concluidos</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
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
