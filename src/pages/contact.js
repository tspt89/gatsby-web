import  React  from  "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FORM from '../components/contactUs.js'

const  ContactPage  =  ()  => (
    <Layout>
        <SEO title="Contact" />
        <div
            style={{
            margin: `3% auto`,
            maxWidth: 960,
            padding: `2% 0.25% 0.0025% ` ,
            }}
        >
            <section className="page-section bg-light" style={{
                    padding: `0 10% 18%`,
                }}>
                <h1 className="text-center uppercase">Contact</h1>
                    <FORM></FORM>
               
            </section>

        </div>
        
    </Layout>
)


export  default  ContactPage