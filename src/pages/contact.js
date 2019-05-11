import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import contactPageStyles from "./contact.module.scss"
import ContactForm from "../components/contact"

const Contact = props => {
  return (
    <Layout transparent={false}>
      <div className={contactPageStyles.wrapper}>
        <div>
          <a target="__blank" href="https://www.google.com/maps/place/Sunhlukawn+Country+Park/@23.8593722,92.6170133,757m/data=!3m2!1e3!4b1!4m5!3m4!1s0x374dee1ffcad71e7:0x5f8c3d22fcc5c960!8m2!3d23.8593722!4d92.619202?hl=en-US">
            <Img
              alt="Google Map of Location"
              fluid={props.data.map.childImageSharp.fluid}
            />
          </a>
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
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
