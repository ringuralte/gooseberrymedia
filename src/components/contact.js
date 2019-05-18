import React from 'react' 

import contactStyles from './contact.module.scss'

const ContactForm = () => {
  return (
    <div className={contactStyles.wrapper}>
      <h2 className={contactStyles.header}>Write To Us</h2>
      <form 
        name="contact"
        method="post" 
        data-netlify="true"
        data-netlify-recaptcha="true"
        data-netlify-honeypot="bot-field"
        action="#"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className={contactStyles.firstHalf}>
          <div className={contactStyles.format}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required/>
          </div>
          <div className={contactStyles.format}>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <div className={contactStyles.format}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required/>
          </div>
        </div>
        <div className={contactStyles.secondHalf}>
          <div className={contactStyles.format}>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" required/>
          </div>
        </div>
        <div className={contactStyles.button}>
          <input className={contactStyles.buttonInput} type="submit" value="Submit" />
        </div>
        <div data-netlify-recaptcha="true"></div>
      </form>
    </div>
  )
}

export default ContactForm;
