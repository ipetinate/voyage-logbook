import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00b0ff'
    },
    secondary: {
      main: '#009688'
    }
  },
  typography: {
    fontFamily: [
      'Montserrat'
    ],
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400
  }
})

export default theme
