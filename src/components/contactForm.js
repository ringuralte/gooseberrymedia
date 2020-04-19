import React from "react"
import ReCaptcha from "react-google-recaptcha"
// import Recaptcha from "./recaptcha"

import contactStyles from "./contactForm.module.scss"

class ContactForm extends React.Component {
  constructor() {
    super()
    this.state = {
      disabled: true,
    }
  }
  onChange = value => {
    if (value) {
      this.setState({ disabled: false })
    }
  }
  onSubmitHandler = e => {
    if (this.state.disabled) {
      e.preventDefault()
    } else {
    }
  }
  render() {
    return (
      <div className={contactStyles.wrapper}>
        <h2 className={contactStyles.header}>Write To Us</h2>
        <form
          className={contactStyles.formWrapper}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.onSubmitHandler}
          action="/formSubmit"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className={contactStyles.firstHalf}>
            <div className={contactStyles.format}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className={contactStyles.format}>
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <div className={contactStyles.format}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div className={contactStyles.secondHalf}>
            <div className={contactStyles.format}>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" required />
            </div>
          </div>
          <div className={contactStyles.button}>
            <input
              className={contactStyles.buttonInput}
              type="submit"
              value="Submit"
            />
            <ReCaptcha
              sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm
