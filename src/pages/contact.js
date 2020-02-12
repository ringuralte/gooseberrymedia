import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import contactPageStyles from "./contact.module.scss"
import ContactForm from "../components/contactForm"

const Contact = props => {
  return (
    <Layout>
      <Head title="Contact" />
      <div className={contactPageStyles.wrapper}>
        <div className={contactPageStyles.info}>
          <div className={contactPageStyles.textArea}>
            <p>
              You can find us at Sunhlukawn, West Serzawl Road, Near Lengpui
              Airport, Mizoram
            </p>
            <p>
              Call us at <a href="tel: +91996114838">+91996114838</a> /{" "}
              <a href="tel: +919650657715">+919650657715</a>
            </p>
            <p>
              Or check us out at{" "}
              <a
                target="__blank"
                href="https://www.google.com/maps/place/Sunhlukawn+Country+Park/@23.8593722,92.6170133,757m/data=!3m2!1e3!4b1!4m5!3m4!1s0x374dee1ffcad71e7:0x5f8c3d22fcc5c960!8m2!3d23.8593722!4d92.619202?hl=en-US"
              >
                {" "}
                Google Maps{" "}
              </a>
            </p>
          </div>
          <div>
            <Img
              alt="Google Map of Location"
              fluid={props.data.map.childImageSharp.fluid}
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </Layout>
  )
}

export default Contact

export const map = graphql`
  query {
    map: file(relativePath: { eq: "map.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
