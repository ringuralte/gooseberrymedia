import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <meta charSet="utf-8" />
      <meta
        name="Description"
        content="Author: Ringu Ralte, Website for Gooseberry Studios, Mizoram"
      />
    </Helmet>
  )
}

export default Head
