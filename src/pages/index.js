import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import {Container } from "react-bootstrap"
import Cards1 from '../components/cards.js'


const IndexPage = () => (
    <Layout>
    <SEO title="Home" />
    <header className="masthead" expand-lg="true">
            <Container>
                <div className="masthead-subheading">Welcome!</div>
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn btn-secondary btn-xl text-uppercase js-scroll-trigger" href="/contact">Contact</a>
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
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <Cards1></Cards1>
                    
              </div>
              
        </section>
    </div>
  </Layout>


  
);

export default IndexPage
