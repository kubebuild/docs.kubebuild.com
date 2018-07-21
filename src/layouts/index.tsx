import { Button, withStyles } from '@material-ui/core'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import withRoot from '../withRoot'
import './index.css'

interface PropTypes {
  classes: ClassNameMap
}

const styles: any = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

const Layout: React.SFC<PropTypes> = ({ children }: any) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: any) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Button>Here</Button>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)
export default withRoot(withStyles(styles)(Layout))
