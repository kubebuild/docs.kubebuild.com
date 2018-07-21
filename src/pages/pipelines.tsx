import Link from 'gatsby-link'
import React from 'react'
import Layout from '../layouts'
const PipelinesPage = () => (
  <Layout>
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)
export default PipelinesPage
