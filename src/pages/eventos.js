import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Cards1 from '../components/events.js'


const EventosPage = () => (
  <Layout>
    <SEO title="Eventos" />
    <div
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
        }}
    >
    
        <section className="page-section bg-light">
        <h1 className="text-center uppercase">Eventos</h1>
            <div className="container">
            <Cards1></Cards1>
            </div>
        </section>
    
    
    
    </div>
    
  </Layout>
)

export default EventosPage