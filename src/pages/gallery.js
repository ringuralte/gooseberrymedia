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
      image: [],
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
          <DialogContent
            aria-labelledby="gallery image"
            className={galleryStyles.dialog}
          >
            <Img
              className={galleryStyles.dialogImage}
              fluid={this.state.image}
            />
          </DialogContent>
        </DialogOverlay>

        <div className={galleryStyles.wrapper}>
          {Object.keys(this.props.data.allFile.edges).map(key => {
            return (
              <div
                onClick={() =>
                  this.setState({
                    isOpen: true,
                    image: this.props.data.allFile.edges[key].node
                      .childImageSharp.fluid,
                  })
                }
                onKeyDown={() =>
                  this.setState({
                    isOpen: true,
                    image: this.props.data.allFile.edges[key].node
                      .childImageSharp.fluid,
                  })
                }
                role="button"
                key={key}
                tabIndex={key}
              >
                <Img
                  className={galleryStyles.galleryImage}
                  alt="gallery image"
                  fluid={
                    this.props.data.allFile.edges[key].node.childImageSharp
                      .fluid
                  }
                />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Gallery

export const galleryImages = graphql`
  fragment galleryImages on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const galleryQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          ...galleryImages
        }
      }
    }
  }
`
