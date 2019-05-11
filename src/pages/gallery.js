import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import galleryStyles from "./gallery.module.scss"

const Gallery = props => {
  return (
    <Layout transparent={false}>
      <div className={galleryStyles.container}>
        <div className={galleryStyles.wrapper}>
          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="production room three"
              fluid={props.data.productionThree.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="control room two"
              fluid={props.data.controlTwo.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="studio front"
              fluid={props.data.studioFront.childImageSharp.fluid}
            />
          </div>

          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="drum set two"
              fluid={props.data.drumsTwo.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="production room five"
              fluid={props.data.productionFive.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="production room six"
              fluid={props.data.productionSix.childImageSharp.fluid}
            />
          </div>

          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="control room one"
              fluid={props.data.controlOne.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="production room one"
              fluid={props.data.productionOne.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="production room two"
              fluid={props.data.productionTwo.childImageSharp.fluid}
            />
          </div>

          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="prodution room seven"
              fluid={props.data.productionSeven.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="production room eight"
              fluid={props.data.productionEight.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="drum set one"
              fluid={props.data.drumsOne.childImageSharp.fluid}
            />
          </div>

          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="control room four"
              fluid={props.data.controlFour.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="control room three"
              fluid={props.data.controlThree.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className={galleryStyles.galleryImage}
              alt="image of lake"
              fluid={props.data.heroImg.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gallery

export const galleryImages = graphql`
  fragment galleryImages on File {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const galleryQuery = graphql`
  query {
    controlOne: file(relativePath: { eq: "control-room-01.jpg" }) {
      ...galleryImages
    }
    controlTwo: file(relativePath: { eq: "control-room-02.jpg" }) {
      ...galleryImages
    }
    controlThree: file(relativePath: { eq: "control-room-03.jpg" }) {
      ...galleryImages
    }
    controlFour: file(relativePath: { eq: "control-room-04.jpg" }) {
      ...galleryImages
    }
    productionOne: file(relativePath: { eq: "production-room-01.jpg" }) {
      ...galleryImages
    }
    productionTwo: file(relativePath: { eq: "production-room-02.jpg" }) {
      ...galleryImages
    }
    productionThree: file(relativePath: { eq: "production-room-03.jpg" }) {
      ...galleryImages
    }
    productionFive: file(relativePath: { eq: "production-room-05.jpg" }) {
      ...galleryImages
    }
    productionSix: file(relativePath: { eq: "production-room-06.jpg" }) {
      ...galleryImages
    }
    productionSeven: file(relativePath: { eq: "production-room-07.jpg" }) {
      ...galleryImages
    }
    productionEight: file(relativePath: { eq: "production-room-08.jpg" }) {
      ...galleryImages
    }
    drumsOne: file(relativePath: { eq: "drum-set-01.jpg" }) {
      ...galleryImages
    }
    drumsTwo: file(relativePath: { eq: "drum-set-02.jpg" }) {
      ...galleryImages
    }
    studioFront: file(relativePath: { eq: "studio-front.jpeg" }) {
      ...galleryImages
    }
    heroImg: file(relativePath: { eq: "hero-img.jpg" }) {
      ...galleryImages
    }
  }
`
