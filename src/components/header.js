import React from 'react'
import { Link } from 'gatsby'

import headerStyles from  './header.module.scss'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuActive: false
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
          <div className={headerStyles.headline}>
            <div className={
              this.state.isMenuActive
                ? `${headerStyles.menuButton} ${headerStyles.menuButtonClose}`
                : headerStyles.menuButton
              }
              onClick={this.toggleMenuAnimation}
            >
              <div className={headerStyles.menuButtonMiddle} />
            </div>
            <h1><Link className={headerStyles.headlineText} to='/'>Gooseberry Studios</Link></h1>
          </div>
          <nav className={this.state.isMenuActive
                ? headerStyles.activeNav
                : headerStyles.nav}>
            <ul className={headerStyles.headerNav}>
              <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/'>Home</Link></li>
              <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/gallery'>Gallery</Link></li>
              <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/about'>About</Link></li>
              <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/contact'>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
