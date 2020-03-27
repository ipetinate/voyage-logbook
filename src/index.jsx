import React from 'react'
import ReactDOM from 'react-dom'
// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// Material UI
import ThemeProvider from '@material-ui/styles/ThemeProvider'
// App Components
import App from './app/App'
import Logbook from './app/logbook/Logbook'
import NotFound from './app/components/NotFound'
import EasterEgg from './app/components/EasterEgg'
// Styles
import './theme/styles/index.css'
import './theme/styles/star-wars-bg.css'
// Others
import * as serviceWorker from './serviceWorker'
import theme from './theme/material-ui.theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/logbook' exact component={Logbook} />
        <Route path='/easter-egg' exact component={EasterEgg} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.register()
