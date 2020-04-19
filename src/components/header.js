import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import headerStyles from "./header.module.scss"

const Header = props => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headWrapper}>
        <div className={headerStyles.siteLogo}>
          <Link to="/">
            <Img
              alt="gooseberry logo"
              fluid={props.data.childImageSharp.fluid}
            />
          </Link>
        </div>

        <nav>
          <ul className={headerStyles.headerNav}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.navItemActive}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.navItemActive}
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.navItemActive}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.navItemActive}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        siteIcon: file(relativePath: { eq: "logo1.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Header data={data.siteIcon} {...props} />}
  />
)
