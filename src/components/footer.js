import React from 'react' 
import { Link } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.wrapper}>
        <div className={footerStyles.block}>
          <p>Sunhlukawn, West Serzawl Road,</p>
          <p>Lengpui,</p> 
          <p>Mizoram - 796410</p>
        </div>
        <div className={footerStyles.block}>
          <p>email: info@gooseberrymedia.in</p>
          <p>Tel : +91996114838, +919650657715</p>
        </div>
        <div className={footerStyles.block}>
          <ul className={footerStyles.nav}>
            <li><Link className={footerStyles.navItem} to='/'>Home</Link></li>
            <li><Link className={footerStyles.navItem} to='/gallery'>Gallery</Link></li>
            <li><Link className={footerStyles.navItem} to='/about'>About</Link></li>
          </ul>
        </div>
      </div>
      <div className={footerStyles.copyright}>
        <p>&copy; gooseberrymedia</p>
      </div>
    </footer>

  )
}

export default Footer
