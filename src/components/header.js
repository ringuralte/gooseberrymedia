import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import headerStyles from "./header.module.scss"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuActive: false,
    }
  }

  toggleMenuAnimation = () => {
    const currentState = this.state.isMenuActive
    this.setState({ isMenuActive: !currentState })
  }

  render() {
    return (
      <header className={headerStyles.header}>
        <div className={headerStyles.headWrapper}>
          <div
            className={
              this.state.isMenuActive
                ? `${headerStyles.menuButton} ${headerStyles.menuButtonClose}`
                : headerStyles.menuButton
            }
            onClick={this.toggleMenuAnimation}
          >
            <div className={headerStyles.menuButtonMiddle} />
          </div>

          <div className={headerStyles.siteLogo}>
            <Link to="/">
              <Img
                alt="gooseberry logo"
                fluid={this.props.data.childImageSharp.fluid}
              />
            </Link>
          </div>

          <nav
            className={
              this.state.isMenuActive
                ? headerStyles.activeNav
                : headerStyles.nav
            }
          >
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
