import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { DialogContent, DialogOverlay } from "@reach/dialog"
import "@reach/dialog/styles.css"

import Layout from "../components/layout"
import Head from "../components/head"
import galleryStyles from "./gallery.module.scss"

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      image: "",
    }
  }

  render() {
    return (
      <Layout>
        <Head title="Gallery" />

        <DialogOverlay
          style={{ background: "hsla(0, 100%, 100%, 0.7)" }}
          isOpen={this.state.isOpen}
          onDismiss={() => this.setState({ isOpen: false })}
        >
          <DialogContent className={galleryStyles.dialog}>
            <button onClick={() => this.setState({ isOpen: false })}>X</button>
            <Img
              className={galleryStyles.dialogImage}
              fluid={this.state.image}
            />
          </DialogContent>
        </DialogOverlay>

        <div className={galleryStyles.wrapper}>
          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.productionThree.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="production room three"
              fluid={this.props.data.productionThree.childImageSharp.fluid}
            />
          </div>
          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.controlTwo.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="control room two"
              fluid={this.props.data.controlTwo.childImageSharp.fluid}
            />
          </div>
          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.studioFront.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="studio front"
              fluid={this.props.data.studioFront.childImageSharp.fluid}
            />
          </div>

          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.drumsTwo.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="drum set two"
              fluid={this.props.data.drumsTwo.childImageSharp.fluid}
            />
          </div>
          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.productionFive.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="production room five"
              fluid={this.props.data.productionFive.childImageSharp.fluid}
            />
          </div>
          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.productionSix.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="production room six"
              fluid={this.props.data.productionSix.childImageSharp.fluid}
            />
          </div>

          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.controlOne.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="control room one"
              fluid={this.props.data.controlOne.childImageSharp.fluid}
            />
          </div>
          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.productionOne.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="production room one"
              fluid={this.props.data.productionOne.childImageSharp.fluid}
            />
          </div>
          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.productionTwo.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="production room two"
              fluid={this.props.data.productionTwo.childImageSharp.fluid}
            />
          </div>

          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.productionSeven.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="prodution room seven"
              fluid={this.props.data.productionSeven.childImageSharp.fluid}
            />
          </div>
          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.productionEight.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="production room eight"
              fluid={this.props.data.productionEight.childImageSharp.fluid}
            />
          </div>
          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.drumsOne.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="drum set one"
              fluid={this.props.data.drumsOne.childImageSharp.fluid}
            />
          </div>

          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.controlFour.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="control room four"
              fluid={this.props.data.controlFour.childImageSharp.fluid}
            />
          </div>
          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.controlThree.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="control room three"
              fluid={this.props.data.controlThree.childImageSharp.fluid}
            />
          </div>
          <div
            onClick={() =>
              this.setState({
                isOpen: true,
                image: this.props.data.heroImg.childImageSharp.fluid,
              })
            }
          >
            <Img
              className={galleryStyles.galleryImage}
              alt="image of lake"
              fluid={this.props.data.heroImg.childImageSharp.fluid}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Gallery

export const galleryImages = graphql`
  fragment galleryImages on File {
    childImageSharp {
      fluid(maxWidth: 900) {
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
