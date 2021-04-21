import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Container } from "react-bootstrap"
import Cards from '../components/cards.js'


const IndexPage = () => (
    <Layout>
    <SEO title="Home" />
    <header className="masthead" expand-lg="true">
            <Container>
                <div className="masthead-subheading">Mis eventos</div>
                <div className="masthead-heading text-uppercase">Bienvenido</div>
                <a className="btn btn-dark btn-xl text-uppercase js-scroll-trigger" href="/contact">Contacto</a>
            </Container>
    </header>
      
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <section className="page-section bg-light">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading">Eventos</h2>
                    <h3 className="section-subheading text-muted">Lista de eventos activos</h3>
                </div>
                <Cards></Cards>
                    
              </div>
              
        </section>
    </div>
  </Layout>


  
);

export default IndexPage
