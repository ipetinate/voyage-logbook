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
// App
import App from './app/App'
import About from './app/components/About'
import NewLogbook from './logbook/new/NewLogbook'
import Logbook from './logbook/Logbook'
import NotFound from './app/components/NotFound'
// Styles
import './index.css'
// Others
import * as serviceWorker from './serviceWorker'
import theme from './theme/material-ui.theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/" exact={true} component={App}></Route>
        <Route path="/new-logbook" exact={true} component={NewLogbook}></Route>
        <Route path="/logbook" exact={true} component={Logbook}></Route>
        <Route path="/about" exact={true} component={About}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
