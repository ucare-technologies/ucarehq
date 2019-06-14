import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  typeof window !== `undefined` && (window.document.title = "404 | UCare");
  return (
  <Layout>
    <SEO title="404: Not found" />
    
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
  )
}

export default NotFoundPage
