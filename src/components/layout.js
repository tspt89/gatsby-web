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
              <a class="button" aria-label="facebook" href="https://www.facebook.com/RobertKiyosaki/" ><FontAwesomeIcon icon={['fab', 'facebook' ]} size="xs" /></a>
              </span>
              <span className="fa-stack fa-2x">
                <a role="button" aria-label="instagram" href="https://www.instagram.com/therealkiyosaki/?hl=es-la%22%3E" ><FontAwesomeIcon icon={['fab', 'instagram']} size="xs"/></a>
              </span>
              <span className="fa-stack fa-2x">
                <a role="button" aria-label="Google" href="https://www.instagram.com/therealkiyosaki/?hl=es-la%22%3E"><FontAwesomeIcon icon={['fab', 'twitter']} size="xs"/></a>
              </span>
              <br />
                {new Date().getFullYear()}, Built with
              <a> Juan R, Theo S, Jacqueline O.</a>
              
              
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
