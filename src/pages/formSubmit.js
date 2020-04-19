import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import formSubmitStyles from "./formSubmit.module.scss"

const FormSubmit = () => {
  return (
    <Layout>
      <Head title="Thank You" />
      <div className={formSubmitStyles.wrapper}>
        <div className={formSubmitStyles.formBody}>
          <h2>Thank You for Contacting Us, we will get back to you soon.</h2>
          <Link to="/">Get Back</Link>
        </div>
      </div>
    </Layout>
  )
}

export default FormSubmit
