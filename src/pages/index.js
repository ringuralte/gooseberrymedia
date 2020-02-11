import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

import Head from "../components/head"
import Layout from "../components/layout"
import ContactForm from "../components/contact"
import homeStyles from "./home.module.scss"

const Home = props => {
  return (
    <Layout transparent={true}>
      <Head title="Home" />
      <div className={homeStyles.home}>
        <div className={homeStyles.headlineText}>
          <div className={homeStyles.headlineTextWrapper}>
            <h1>Gooseberry Studios</h1>
            <h2 className={homeStyles.headlineTextUpper}> Turn your Dreams </h2>
            <p className={homeStyles.headlineTextStrong}>
              into{" "}
              <span className={homeStyles.headlineTextYellow}>Reality</span>
            </p>
            <div>
              <a href="#form" className={homeStyles.button}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <Img
          alt="Hero image lake"
          className={homeStyles.heroImage}
          fluid={props.data.heroImage.childImageSharp.fluid}
        />
      </div>

      <div className={homeStyles.line} />

      <div className={homeStyles.heroText}>
        <p>
          Gooseberry Studio is a state of the art recording and video studio set
          up to make your dreams into reality.{" "}
          <span className={homeStyles.hidden}>
            {" "}
            For experienced and amateurs alike, you will find us a friendly team
            who can record and produce your music, video and films
            professionally{" "}
          </span>
        </p>
      </div>

      <div className={homeStyles.imageGrid}>
        <Fade>
          <Img
            className={homeStyles.gridImageFront}
            fluid={props.data.studioFront.childImageSharp.fluid}
          />
        </Fade>

        <div className={homeStyles.hiddenBlock}>
          <Fade>
            <p>
              For experienced and amateurs alike, you will find us a friendly
              team who can record and produce your music, video and films
              professionally
            </p>
          </Fade>
        </div>

        <div className={homeStyles.fourGrids}>
          <Fade>
            <Img
              alt="Control Room"
              className={homeStyles.gridImage}
              fluid={props.data.controlTwo.childImageSharp.fluid}
            />
          </Fade>
          <Fade>
            <Img
              alt="Solo Recording Room"
              className={homeStyles.gridImage}
              fluid={props.data.controlOne.childImageSharp.fluid}
            />
          </Fade>
          <Fade>
            <Img
              alt="Production room one"
              className={homeStyles.gridImage}
              fluid={props.data.productionOne.childImageSharp.fluid}
            />
          </Fade>
          <Fade>
            <Img
              alt="Production room one"
              className={homeStyles.gridImage}
              fluid={props.data.productionTwo.childImageSharp.fluid}
            />
          </Fade>
        </div>
      </div>

      <div className={homeStyles.cardWrapper}>
        <div className={homeStyles.cards}>
          <Fade>
            <div className={homeStyles.cardContent}>
              <Img
                className={homeStyles.cardImages}
                fluid={props.data.micVocals.childImageSharp.fluid}
              />
              <h4>Recording</h4>
              <p>
                Gooseberry Studios is equipped with the best audio recording
                tools to help bring your ideas to life.
              </p>
            </div>
          </Fade>

          <Fade>
            <div className={homeStyles.cardContent}>
              <Img
                className={homeStyles.cardImages}
                fluid={props.data.film.childImageSharp.fluid}
              />
              <h4>Videos</h4>
              <p>
                We also make Music Videos and Films and have collaborated in
                projects such as the Bayberry Sessions.
              </p>
            </div>
          </Fade>

          <Fade>
            <div className={homeStyles.cardContent}>
              <Img
                className={homeStyles.cardImages}
                fluid={props.data.events.childImageSharp.fluid}
              />
              <h4>Events</h4>
              <p>
                We can also cover Events such as Weddings, Birthday parties,
                Sporting events and other Local shows.
              </p>
            </div>
          </Fade>
        </div>
      </div>

      <a id="form">
        <ContactForm />
      </a>
    </Layout>
  )
}

export default Home

export const theFourGrids = graphql`
  fragment theFourGrids on File {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pngFiles = graphql`
  fragment pngFiles on File {
    childImageSharp {
      fluid(maxWidth: 160) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    controlOne: file(relativePath: { eq: "control-room-01.jpg" }) {
      ...theFourGrids
    }
    studioFront: file(relativePath: { eq: "studio-front.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    controlTwo: file(relativePath: { eq: "control-room-02.jpg" }) {
      ...theFourGrids
    }
    productionOne: file(relativePath: { eq: "production-room-01.jpg" }) {
      ...theFourGrids
    }
    productionTwo: file(relativePath: { eq: "production-room-02.jpg" }) {
      ...theFourGrids
    }
    events: file(relativePath: { eq: "events.png" }) {
      ...pngFiles
    }
    film: file(relativePath: { eq: "film.png" }) {
      ...pngFiles
    }
    micVocals: file(relativePath: { eq: "micvocals.png" }) {
      ...pngFiles
    }
  }
`
