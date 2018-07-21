import {
  AppBar,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'
import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
// import Header from '../components/header'
import withRoot from '../withRoot'
import { drawerItems } from './drawerItems'
import './index.css'

interface PropTypes {
  classes: ClassNameMap
}

const drawerWidth = 240

const styles: any = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  appBarLeft: {
    marginLeft: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    height: '100%',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
})

const Layout: React.SFC<PropTypes> = ({ children, classes }) => (
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
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap={true}>
              Documentation
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.appFrame}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <Divider />
            {drawerItems}
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </>
    )}
  />
)

export default withRoot(withStyles(styles)(Layout))
