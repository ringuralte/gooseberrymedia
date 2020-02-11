import React from "react"
import ReCaptcha from "react-google-recaptcha"

import recaptchaStyles from "./recaptcha.module.scss"

class Recaptcha extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reCaptchaResponse: "",
    }
  }
  onChange = value => {
    console.log("reacaptcha value: ", value)
  }
  render() {
    return (
      <div className={recaptchaStyles.wrapper}>
        <ReCaptcha
          sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default Recaptcha
