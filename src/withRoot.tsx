import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from './getPageContext'

interface PropTypes {
  pageContext?: any
}

function withRoot(Component) {
  class WithRoot extends React.Component<PropTypes> {
    public pageContext: any = null
    constructor(props) {
      super(props)
      this.pageContext = this.props.pageContext || getPageContext()
    }
    public componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#server-side-jss')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }
    public render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <JssProvider generateClassName={this.pageContext.generateClassName}>
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <Component {...this.props} />
          </MuiThemeProvider>
        </JssProvider>
      )
    }
  }
  return WithRoot
}
export default withRoot
