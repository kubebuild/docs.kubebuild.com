import Link from 'gatsby-link'
import React from 'react'
import Layout from '../layouts'
const IndexPage = () => (
  <Layout>
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)
export default IndexPage
