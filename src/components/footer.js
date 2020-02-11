import React from "react"
import { Link } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.wrapper}>
        <div className={footerStyles.block}>
          <span>Sunhlukawn, Serzawl Road</span>
          <span>Lengpui,</span>
          <span>Mizoram - 796410</span>
        </div>
        <div className={footerStyles.block}>
          <p>email: info@gooseberrymedia.in</p>
          <p>
            <a className={footerStyles.phone} href="tel: +91996114838">
              Tel : +91996114838
            </a>
            <a className={footerStyles.phone} href="tel: +919650657715">
              {" "}
              +919650657715
            </a>
          </p>
        </div>
        <div className={footerStyles.block}>
          <ul className={footerStyles.nav}>
            <li>
              <Link className={footerStyles.navItem} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={footerStyles.navItem} to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className={footerStyles.navItem} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={footerStyles.navItem} to="/contact">
                Contact
              </Link>
            </li>
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
