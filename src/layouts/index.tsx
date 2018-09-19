import {
  AppBar,
  Divider,
  Drawer,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'
import cx from 'classnames'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Logo from '../assets/logo.svg'
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
    // width: `calc(100% - ${drawerWidth}px)`,
    height: 75,
    backgroundColor: '#909090',
  },
  appBarLeft: {
    marginLeft: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    height: '100%',
    marginTop: '10px',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  logo: {
    height: 40,
    paddingRight: 10,
    marginTop: 25,
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
        <Helmet title={data.site.siteMetadata.title}>
          <link rel="icon" type="image/png" href="/favicon/favicon.png" />
        </Helmet>

        <AppBar
          position="absolute"
          className={cx(classes.appBar, classes.appBarLeft)}
        >
          <Toolbar>
            <img src={Logo} className={classes.logo} />
            <Typography variant="title" color="inherit" noWrap={true}>
              KUBEBUILD
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
