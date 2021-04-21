/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

import {Container} from "react-bootstrap";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main >
        {children}
      </main>
      
        <footer className="bg-dark" >
          <Container >
            
            <div className="text-center center-block">
              
              <span className="fa-stack fa-2x">
              <i role="button" aria-label="facebook" ><FontAwesomeIcon icon={['fab', 'facebook' ]} size="xs" /></i>
              </span>
              <span className="fa-stack fa-2x">
              <i role="button" aria-label="instagram" ><FontAwesomeIcon icon={['fab', 'instagram']} size="xs"/></i>
              </span>
              <span className="fa-stack fa-2x">
                <i role="button" aria-label="Google" ><FontAwesomeIcon icon={['fab', 'google']} size="xs"/></i> 
              </span>
              <br />
              © {new Date().getFullYear()}, Built with
              <a href="https://www.gatsbyjs.org"> Gatsby</a>
              
              
            </div>
          </Container>
        </footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
