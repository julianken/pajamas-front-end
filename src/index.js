import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const renderTarget = document.querySelector(`#app`)

ReactDOM.render(
  <Router>
    <Route exact path={`/`} component={App} />
  </Router>,
  renderTarget
)

