import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import headerStyles from  './header.module.scss'

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
      <header className={this.props.transparent ? headerStyles.header : headerStyles.headerOpaque}>

        <div className={headerStyles.headWrapper}>

          <div className={
            this.state.isMenuActive
              ? `${headerStyles.menuButton} ${headerStyles.menuButtonClose}`
              : headerStyles.menuButton
            }
            onClick={this.toggleMenuAnimation}
          >
            <div className={headerStyles.menuButtonMiddle} />
          </div>

          <div className={headerStyles.siteLogo}>
            <Img className={headerStyles.siteLogoInner}
              alt="gooseberry logo"
              fluid={this.props.data.childImageSharp.fluid}
            />
          </div>
          
          <nav className={this.state.isMenuActive
                ? this.props.transparent ? headerStyles.activeNav : headerStyles.activeNavTransparent
                : this.props.transparent ? headerStyles.navTransparent: headerStyles.nav}>
            <ul className={headerStyles.headerNav}>
              <li><Link className={this.props.transparent ? headerStyles.navItem : headerStyles.navItemOpaque} activeClassName={this.props.transparent ? headerStyles.navItemActive : headerStyles.navItemOpaqueActive} to='/'>Home</Link></li>
              <li><Link className={this.props.transparent ? headerStyles.navItem : headerStyles.navItemOpaque} activeClassName={this.props.transparent ? headerStyles.navItemActive : headerStyles.navItemOpaqueActive} to='/gallery'>Gallery</Link></li>
              <li><Link className={this.props.transparent ? headerStyles.navItem : headerStyles.navItemOpaque} activeClassName={this.props.transparent ? headerStyles.navItemActive : headerStyles.navItemOpaqueActive} to='/about'>About</Link></li>
              <li><Link className={this.props.transparent ? headerStyles.navItem : headerStyles.navItemOpaque} activeClassName={this.props.transparent ? headerStyles.navItemActive : headerStyles.navItemOpaqueActive} to='/contact'>Contact</Link></li>
            </ul>
          </nav>
        
        </div>

      </header>
    )
  }
}

export default props => (
  <StaticQuery
    query = { graphql`
      query {
        siteIcon: file(relativePath: { eq: "logo1.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Header data={data.siteIcon} {...props} />
    )}
    
  />
)
